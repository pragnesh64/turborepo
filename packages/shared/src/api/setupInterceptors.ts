import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import type { ApiConfig } from "./types";

let isRefreshing = false;
let failedQueue: {
  resolve: (value?: AxiosResponse) => void;
  reject: (error: unknown) => void;
  config: InternalAxiosRequestConfig;
}[] = [];


const processQueue = (
  error: unknown,
  token: string | null,
  ApiClient: AxiosInstance
) => {
  failedQueue.forEach(async ({ resolve, reject, config }) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      resolve(await ApiClient(config));
    } else {
      reject(error);
    }
  });
  failedQueue = [];
};

export const setupInterceptors = (
  ApiClient: AxiosInstance,
  AuthClient: AxiosInstance,
  config: ApiConfig
) => {
  const { store, persistor, routes, endpoints, onAuthUpdate, onAuthClear } =
    config;

  // REQUEST
  ApiClient.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    const state = store.getState();
    const token = state.auth;

    if (token?.access || token?.onboarding_token) {
      request.headers.Authorization = `Bearer ${
        token.access ?? token.onboarding_token
      }`;
    }
    return request;
  });

  // RESPONSE
  ApiClient.interceptors.response.use(
    (res: AxiosResponse) => res,
    async (error: AxiosError) => {
      const originalRequest = error.config as InternalAxiosRequestConfig  & {
        _retry?: boolean;
      };

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        if (isRefreshing) {
          return new Promise((resolve, reject) =>
            failedQueue.push({ resolve, reject, config: originalRequest })
          );
        }

        isRefreshing = true;

        try {
          const state = store.getState();
          const response = await AuthClient.post(endpoints.REFRESH_TOKEN, {
            refresh: state.auth.refresh,
          });

          const tokens = response.data.data;
          onAuthUpdate(tokens);

          processQueue(null, tokens.access, ApiClient);

          originalRequest.headers.Authorization = `Bearer ${tokens.access}`;

          return ApiClient(originalRequest);
        } catch (err) {
          processQueue(err, null, ApiClient);
          onAuthClear();
          persistor.purge();

          const state = store.getState();
          window.location.href = state.auth.onboarding_token
            ? routes.PRICING
            : routes.LOGIN;

          return Promise.reject(err);
        } finally {
          isRefreshing = false;
        }
      }

      return Promise.reject(error);
    }
  );
};
