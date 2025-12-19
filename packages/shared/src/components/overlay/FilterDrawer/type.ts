import { FilterOperator } from "./contact";

export type FilterValue =
  | string
  | number
  | boolean
  | (string | number)[];

export interface FilterItemType {
  field: string;
  operator: FilterOperator;
  value: string | string[];
}

export interface FilterModelType {
  items: FilterItemType[];
}

export interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  onApply: () => void;
  title: string;
  placement: "left" | "right" | "top" | "bottom";
  columns: GridColumns[];
  filterModel: FilterModelType;
  onChangeFilter: (model: FilterModelType) => void;
  onClear: () => void;
  width?: number;
}

export type DataType = "string" | "number" | "date" | "boolean";


export interface ErrorState {
  column: string;
  operator: string;
  value: string;
  range: string;
}


export interface ColumnFilterOperator {
  label: string;
  value: string;
}

export interface GridColumns {
  field: string;
  headerName: string;
  flex?: number;
  minWidth?: number;
  maxWidth?: number;
  sortable?: boolean;
  filterable?: boolean;
  disableColumnMenu?: boolean;
  dataType?: "string" | "number" | "date" | "boolean";
  filterOperators?: ColumnFilterOperator[];
}
