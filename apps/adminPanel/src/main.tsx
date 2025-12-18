import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@my-monorepo/shared/src/style/theme.css";
import "@my-monorepo/shared/src/styles.css";
import "./theme.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AlertProvider } from "@shared/context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AlertProvider>
          <App />
        </AlertProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
