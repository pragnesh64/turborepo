import { ReactNode } from "react";

export type SubHeaderActionType = "button" | "primary" | "dropdown";

export interface SubHeaderAction {
  key: string;
  label?: string;
  icon?: ReactNode;
  type: SubHeaderActionType;

  onClick?: () => void;

  /** Only for dropdown */
  menuItems?: {
    key: string;
    label: string;
    onClick?: () => void;
  }[];
}

export interface SubHeaderProps {
  title: string;
  count?: number;
  filters?: { label: string; value: string }[];
  actions?: SubHeaderAction[];
}
