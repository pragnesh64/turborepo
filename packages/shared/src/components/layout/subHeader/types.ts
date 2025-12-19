import { ReactNode } from "react";

export interface SubHeaderLeftItem {
  type: "title" | "search" | "filterTag" | "component";
  value?: string;
  tags?: string[];
  component?: ReactNode;
  placeholder?: string;
  onSearch?: (value: string) => void;
}

export interface SubHeaderRightItem {
  type: "button" | "dropdown" | "component";
  subType?: "primary" | "default";
  key?: string;
  label?: string | ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  variant?: "outlined" | "dashed" | "solid" | "filled" | "text" | "link";
  color?: string;
  items?: { key: string; label: ReactNode }[];
  component?: ReactNode;
  style?: React.CSSProperties;
}

// Union type for any item
export type SubHeaderItem = SubHeaderLeftItem | SubHeaderRightItem;

export interface SubHeaderConfig {
  leftItems?: SubHeaderLeftItem[];
  rightItems?: SubHeaderRightItem[];
  className?: string;
}

export interface SubHeaderProps {
  config: SubHeaderConfig;
  className?: string;
}
