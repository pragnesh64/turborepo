import React from "react";
import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd/es/button";
// import RestrictedComponent from "../../../routes/privateRoutes/PrivateComponent";
// import type { PermissionType } from "../../../redux/Type/Type";

const variants = {
  default: {
    backgroundColor: "rgba(255, 255, 255, 1)",
    transition: "filter 0.3s ease",
    color: "rgba(157, 163, 175, 1)",
    border: "1px solid rgba(229, 231, 235, 1)",
  },
  primary: {
    backgroundColor: "rgba(25, 27, 31, 1)",
    color: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(25, 27, 31, 1)",
  },
  primaryOutlined: {
    backgroundColor: "transparent",
    border: "1px solid rgba(25, 27, 31, 1)",
    color: "rgba(25, 27, 31, 1)",
  },
  secondary: {
    background:
      "linear-gradient(91.11deg, #9673E9 0.3%, #C558E5 29.11%, #EC9C75 57.17%, #EC7B5C 76.66%, #E9AE89 98.87%)",
    color: "#fff",
  },
  danger: {
    backgroundColor: "rgba(239, 68, 68, 1)",
    border: "1px solid rgba(239, 68, 68, 1)",
    color: "#fff",
  },
  dangerOutlined: {
    backgroundColor: "transparent",
    border: "1px solid rgba(239, 68, 68, 1)",
    color: "rgba(239, 68, 68, 1)",
  },
  soft: {
    background: "linear-gradient(90deg, #E5E7EB, #D1D5DB)",
    color: "#9CA3AF",
  },
} as const;

type VariantType =
  | "default"
  | "danger"
  | "primary"
  | "primaryOutlined"
  | "secondary"
  | "dangerOutlined"
  | "soft";

export type CustomButtonProps = {
  children?: React.ReactNode;
  variantType?: VariantType;
  fullWidth?: boolean;
  onclick?: () => void;
  startIcon?: React.ReactNode;
  // Permission: PermissionType;
  style?: React.CSSProperties; // replaces MUI sx
} & Omit<AntButtonProps, "type">; // we override type system

const Button: React.FC<CustomButtonProps> = ({
  children,
  variantType = "default",
  fullWidth = false,
  onclick,
  startIcon,
  // Permission,
  style,
  ...props
}) => {
  return (
    // <RestrictedComponent permission={Permission}>
    <AntButton
      {...props}
      onClick={onclick}
      icon={startIcon}
      block={fullWidth}
      style={{
        borderRadius: "12px",
        fontWeight: 500,
        fontSize: "13px",
        fontFamily: "Manrope",
        padding: children ? "7px 16px" : "8px",
        display: "flex",
        alignItems: "center",
        gap: children ? 6 : 0,
        ...variants[variantType],
        ...style,
      }}
    >
      {children}
    </AntButton>
    // </RestrictedComponent>
  );
};

export default Button;
