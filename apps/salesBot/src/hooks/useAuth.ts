import { AuthClient } from "../lib/client";
import { API_ENDPOINTS } from "../lib/endpoint";

import {
  useLogin,
  useRegister,
  useRefreshToken,
  useForgotPassword,
} from "@shared/hooks/auth";

export const useAuth = () => {
  return {
    login: useLogin(
      AuthClient,
      API_ENDPOINTS.AUTH.LOGIN
    ),

    register: useRegister(
      AuthClient,
      API_ENDPOINTS.AUTH.REGISTER
    ),

    refreshToken: useRefreshToken(
      AuthClient,
      API_ENDPOINTS.AUTH.REFRESH_TOKEN
    ),

    forgotPassword: useForgotPassword(
      AuthClient,
      API_ENDPOINTS.AUTH.FORGOT_PASSWORD_OTP
    ),
  };
};
