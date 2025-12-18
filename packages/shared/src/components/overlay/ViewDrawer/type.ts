export interface ViewDrawerProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  placement?: "left" | "right" | "top" | "bottom";
  width?: number;
  rowData: Record<string, unknown>;
  fields?: ViewField[];
}

export interface ViewField<T = unknown> {
  label: string;
  fieldName: string;
  render?: (value: T, row: Record<string, unknown>) => string;
}
