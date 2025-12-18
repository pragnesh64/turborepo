export interface LoginInput {
  email: string;
  password: string;
}

export interface RegisterInput {
  name: string;
  email: string;
  password: string;
}

export interface RefreshTokenInput {
  refresh_token: string;
}

export interface ForgotPasswordInput {
  email: string;
}

export interface AuthResponse<T> {
  data: T;
  message: string;
}
