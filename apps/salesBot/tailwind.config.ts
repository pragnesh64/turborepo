import sharedConfig from "@my-monorepo/shared/style/tailwind.config.ts";

export default {
  ...sharedConfig,
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
};
