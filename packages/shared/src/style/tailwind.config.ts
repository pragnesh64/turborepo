import type { Config } from "tailwindcss";

const config: Config = {
  content: ["../../apps/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Neutrals */
        neutral: {
          900: "var(--neutral-900)",
          800: "var(--neutral-800)",
          700: "var(--neutral-700)",
          600: "var(--neutral-600)",
          500: "var(--neutral-500)",
          400: "var(--neutral-400)",
          300: "var(--neutral-300)",
          200: "var(--neutral-200)",
          100: "var(--neutral-100)",
          50: "var(--neutral-50)",
        },

        /* Generic */
        black: "var(--black)",
        white: "var(--white)",

        /* Brand */
        purple: {
          500: "var(--purple-500)",
        },

        /* Status */
        error: {
          500: "var(--error-500)",
          100: "var(--error-100)",
        },
        warning: {
          500: "var(--warning-500)",
          100: "var(--warning-100)",
        },
        success: {
          500: "var(--success-500)",
          100: "var(--success-100)",
        },
      },
    },
  },
  plugins: [],
};

export default config;
