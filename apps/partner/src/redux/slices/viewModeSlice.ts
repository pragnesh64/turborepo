// src/redux/slices/viewModeSlice.ts
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ViewModeState } from "../type/type";

const initialState: ViewModeState = {};

const viewModeSlice = createSlice({
  name: "viewMode",
  initialState,
  reducers: {
    setViewMode: (
      state,
      action: PayloadAction<{ module: string; viewType: "card" | "table" }>
    ) => {
      const { module, viewType } = action.payload;
      state[module] = viewType;
    },

    clearViewModes: () => initialState,
  },
});

export const { setViewMode, clearViewModes } = viewModeSlice.actions;

export default viewModeSlice.reducer;
