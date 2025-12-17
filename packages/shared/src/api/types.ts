import type { Persistor } from "redux-persist";
import type { Store } from "@reduxjs/toolkit";

export interface AuthState {
  access?: string;
  refresh?: string;
  onboarding_token?: string;
}

export interface RootState {
  auth: AuthState;
}

export interface ApiConfig {
  store: Store<RootState>;
  persistor: Persistor;
  routes: {
    LOGIN: string;
    PRICING: string;
  };
  endpoints: {
    REFRESH_TOKEN: string;
  };
  onAuthUpdate: (tokens: { access: string; refresh: string }) => void;
  onAuthClear: () => void;
}
