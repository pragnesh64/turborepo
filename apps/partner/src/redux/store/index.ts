import { configureStore, type Reducer } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import permissionReducer from "../slices/permissionSlice";
import viewModeReducer from "../slices/viewModeSlice";
import notificationReducer from "../slices/notificationSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
const authPersistConfig = {
  key: "auth",
  storage,
};
const permissionPersistConfig = {
  key: "permission",
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer) as Reducer,
    permission: persistReducer(
      permissionPersistConfig,
      permissionReducer
    ) as Reducer,
    viewMode: viewModeReducer,
    notification: persistReducer(
      {
        key: "notification",
        storage,
      },
      notificationReducer
    ) as Reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
