import type { InputProps as AntInputProps } from "antd/es/input";

export interface CustomInputProps extends AntInputProps {
  formLabel?: string;
  required?: boolean;
  error?: string | string[] | Record<string, unknown>;
  description?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  variableToken?: string;
  onVariableClick?: (token: string) => void;
  borderRadius?: number;
  maxLength?: number;
  readonly?: boolean;
}
