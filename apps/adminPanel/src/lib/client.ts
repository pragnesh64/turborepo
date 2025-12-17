import { createClient, setupInterceptors } from "@shared/api";
import { store, persistor } from "../redux/store";
import { updateAuthData } from "../redux/helperFunctions";
import { clearAuthData } from "../redux/slices/authSlice";
import { ROUTES } from "./routes";
import { API_ENDPOINTS } from "./endpoint";

export const AuthClient = createClient(import.meta.env.VITE_API_BASE_URL);
export const ApiClient = createClient(import.meta.env.VITE_API_BASE_URL);

setupInterceptors(ApiClient, AuthClient, {
  store,
  persistor,
  routes: {
    LOGIN: ROUTES.LOGIN,
    PRICING: ROUTES.PRICING,
  },
  endpoints: {
    REFRESH_TOKEN: API_ENDPOINTS.AUTH.REFRESH_TOKEN,
  },
  onAuthUpdate: updateAuthData,
  onAuthClear: () => store.dispatch(clearAuthData()),
});
