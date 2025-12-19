export enum ViewTypeList {
  FORM = "form",
  AI_SUMMARY = "aiSummary",
  SUMMARY = "summary",
}
export type ViewType =
  | ViewTypeList.FORM
  | ViewTypeList.AI_SUMMARY
  | ViewTypeList.SUMMARY;
export interface ViewDrawerProps {
  open: boolean;
  onClose: () => void;
  title: string;
  placement: "left" | "right" | "top" | "bottom";
  viewType: ViewType;
  width?: number;
  rowData?: Record<string, unknown>;
  fields?: ViewField[];
  aiSummary?: string;
  summaryComponent?: React.ReactNode;
}

export interface ViewField<T = unknown> {
  label: string;
  fieldName: string;
  render?: (value: T, row: Record<string, unknown>) => string;
}
