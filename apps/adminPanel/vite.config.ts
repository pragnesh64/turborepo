import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@shared": path.resolve(__dirname, "../../packages/shared/src"),
    },
    dedupe: ['react', 'react-dom'],
  },
  server: {
    port: 3001,
    open: true,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@my-monorepo/shared'],
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
});
