// import type { ThemeConfig } from "antd";

// export const antdTheme: ThemeConfig = {
//   token: {
//     /* ===============================
//        BRAND
//     =============================== */
//     colorPrimary: "var(--color-primary)",
//     colorPrimaryHover: "var(--color-primary-hover)",
//     colorPrimaryActive: "var(--color-primary-active)",

//     /* ===============================
//        TEXT
//     =============================== */
//     colorText: "var(--neutral-900)",
//     colorTextSecondary: "var(--neutral-600)",
//     colorTextTertiary: "var(--neutral-500)",
//     colorTextQuaternary: "var(--neutral-400)",

//     /* ===============================
//        BACKGROUND
//     =============================== */
//     colorBgBase: "var(--neutral-50)",
//     colorBgContainer: "var(--white)",
//     colorBgElevated: "var(--white)",
//     colorBgLayout: "var(--neutral-100)",

//     /* ===============================
//        BORDER
//     =============================== */
//     colorBorder: "var(--neutral-300)",
//     colorBorderSecondary: "var(--neutral-200)",

//     /* ===============================
//        STATUS
//     =============================== */
//     colorError: "var(--error-500)",
//     colorErrorBg: "var(--error-100)",

//     colorWarning: "var(--warning-500)",
//     colorWarningBg: "var(--warning-100)",

//     colorSuccess: "var(--success-500)",
//     colorSuccessBg: "var(--success-100)",

//     /* ===============================
//        RADIUS
//     =============================== */
//     borderRadiusSM: 4,
//     borderRadius: 8,
//     borderRadiusLG: 12,

//     /* ===============================
//        SHADOW
//     =============================== */
//     boxShadow: "var(--shadow)",
//     boxShadowSecondary: "var(--shadow-md)",

//     /* ===============================
//        MOTION
//     =============================== */
//     motionDurationFast: "0.15s",
//     motionDurationMid: "0.2s",
//     motionDurationSlow: "0.3s",
//   },

//   components: {
//     Button: {
//       controlHeight: 40,
//       borderRadius: 8,
//       colorPrimary: "var(--color-primary)",
//       colorPrimaryHover: "var(--color-primary-hover)",
//       colorPrimaryActive: "var(--color-primary-active)",
//       colorTextLightSolid: "var(--white)",
//     },

//     Input: {
//       controlHeight: 40,
//       borderRadius: 8,
//       colorBorder: "var(--neutral-300)",
//       colorTextPlaceholder: "var(--neutral-400)",
//     },

//     Select: {
//       controlHeight: 40,
//       borderRadius: 8,
//       colorBorder: "var(--neutral-300)",
//     },

//     Card: {
//       borderRadiusLG: 12,
//       boxShadow: "var(--shadow-sm)",
//     },

//     Modal: {
//       borderRadiusLG: 12,
//     },

//     Tooltip: {
//       colorBgSpotlight: "var(--neutral-900)",
//       colorTextLightSolid: "var(--white)",
//     },
//   },
// };
import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    /* ===============================
       BRAND
    =============================== */
    colorPrimary: "var(--black)",

    /* ===============================
       TEXT
    =============================== */
    colorText: "var(--neutral-900)",
    colorTextSecondary: "var(--neutral-600)",
    colorTextTertiary: "var(--neutral-500)",
    colorTextQuaternary: "var(--neutral-400)",

    /* ===============================
       BACKGROUND
    =============================== */
    colorBgBase: "var(--neutral-50)",
    colorBgLayout: "var(--neutral-100)",
    colorBgContainer: "var(--white)",
    colorBgElevated: "var(--white)",

    /* ===============================
       BORDER
    =============================== */
    colorBorder: "var(--neutral-300)",
    colorBorderSecondary: "var(--neutral-200)",

    /* ===============================
       STATUS
    =============================== */
    colorError: "var(--error-500)",
    colorErrorBg: "var(--error-100)",

    colorWarning: "var(--warning-500)",
    colorWarningBg: "var(--warning-100)",

    colorSuccess: "var(--success-500)",
    colorSuccessBg: "var(--success-100)",

    /* ===============================
       RADIUS
    =============================== */
    borderRadiusSM: 4, // --radius-sm
    borderRadius: 8, // --radius-md
    borderRadiusLG: 12, // --radius-lg

    /* ===============================
       SHADOW
    =============================== */
    boxShadow: "var(--shadow)",
    boxShadowSecondary: "var(--shadow-md)",

    /* ===============================
       MOTION
    =============================== */
    motionDurationFast: "0.15s",
    motionDurationMid: "0.2s",
    motionDurationSlow: "0.3s",
  },

  components: {
    Button: {
      controlHeight: 40,
      borderRadius: 8,
      colorPrimary: "var(--black)",
      colorTextLightSolid: "var(--white)",
      colorBorder: "var(--neutral-300)",
    },

    Input: {
      controlHeight: 40,
      borderRadius: 8,
      colorBorder: "var(--neutral-300)",
      colorTextPlaceholder: "var(--neutral-400)",
    },

    Select: {
      controlHeight: 40,
      borderRadius: 8,
      colorBorder: "var(--neutral-300)",
    },

    Card: {
      borderRadiusLG: 12,
      boxShadow: "var(--shadow-sm)",
    },

    Modal: {
      borderRadiusLG: 12,
    },

    Tooltip: {
      colorBgSpotlight: "var(--neutral-900)",
      colorTextLightSolid: "var(--white)",
    },
  },
};
