import type { AxiosInstance } from "axios";
import type {
  LoginInput,
  RegisterInput,
  RefreshTokenInput,
  ForgotPasswordInput,
  AuthResponse,
} from "./types";

export const loginApi = async <T>(
  client: AxiosInstance,
  url: string,
  data: LoginInput
): Promise<T> => {
  const res = await client.post<AuthResponse<T>>(url, data);
  return res.data.data;
};

export const registerApi = async <T>(
  client: AxiosInstance,
  url: string,
  data: RegisterInput
): Promise<T> => {
  const res = await client.post<AuthResponse<T>>(url, data);
  return res.data.data;
};

export const refreshTokenApi = async <T>(
  client: AxiosInstance,
  url: string,
  data: RefreshTokenInput
): Promise<T> => {
  const res = await client.post<AuthResponse<T>>(url, data);
  return res.data.data;
};

export const forgotPasswordApi = async (
  client: AxiosInstance,
  url: string,
  data: ForgotPasswordInput
): Promise<void> => {
  await client.post(url, data);
};
