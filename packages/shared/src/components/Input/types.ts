import type { FormLabelProps, TextFieldProps } from "@mui/material";

export type CustomTextFieldProps = TextFieldProps & {
  formLabel?: string | React.ReactNode;
  variableToken?: string;
  onVariableClick?: (token: string) => void;
  formLabelProps?: FormLabelProps;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  required?: boolean;
  borderRadius?: string;
  maxLength?: number | string;
  readonly?: boolean;
  onKeyDown?: any;
  minDate?: string;
  maxDate?: string;
};
