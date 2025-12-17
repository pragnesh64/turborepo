import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { AuthState } from "../type/type";

const initialState: AuthState = {
  is_onboarded: null,
  access: null,
  onboarding_token: null,
  refresh: null,
  tenant: null,
  user: null,
  subscription: null,
  order_id: null,
  plan_id: null,
  payment_status:null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<AuthState>) => {
      return { ...state, ...action.payload };
    },
    clearAuthData: () => {
      return { ...initialState };
    },
  },
});

export const { setAuthData, clearAuthData } = authSlice.actions;

export default authSlice.reducer;
