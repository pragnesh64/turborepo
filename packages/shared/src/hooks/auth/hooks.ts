import { useMutation } from "@tanstack/react-query";
import type { AxiosError, AxiosInstance } from "axios";
import {
  loginApi,
  registerApi,
  refreshTokenApi,
  forgotPasswordApi,
} from "./api";
import type {
  LoginInput,
  RegisterInput,
  RefreshTokenInput,
  ForgotPasswordInput,
} from "./types";

/* ---------------------------------------
 * LOGIN
 * ------------------------------------- */
export const useLogin = <T>(
  client: AxiosInstance,
  endpoint: string
) =>
  useMutation<T, AxiosError, LoginInput>({
    mutationFn: (data) => loginApi<T>(client, endpoint, data),
  });

/* ---------------------------------------
 * REGISTER
 * ------------------------------------- */
export const useRegister = <T>(
  client: AxiosInstance,
  endpoint: string
) =>
  useMutation<T, AxiosError, RegisterInput>({
    mutationFn: (data) => registerApi<T>(client, endpoint, data),
  });

/* ---------------------------------------
 * REFRESH TOKEN
 * ------------------------------------- */
export const useRefreshToken = <T>(
  client: AxiosInstance,
  endpoint: string
) =>
  useMutation<T, AxiosError, RefreshTokenInput>({
    mutationFn: (data) => refreshTokenApi<T>(client, endpoint, data),
  });

/* ---------------------------------------
 * FORGOT PASSWORD
 * ------------------------------------- */
export const useForgotPassword = (
  client: AxiosInstance,
  endpoint: string
) =>
  useMutation<void, AxiosError, ForgotPasswordInput>({
    mutationFn: (data) => forgotPasswordApi(client, endpoint, data),
  });
