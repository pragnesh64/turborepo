/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AutocompleteProps } from "@mui/material";

export type optionType = {
  Id: string;
  Value: string;
  OtherColumnJSON?: string;
  isNew?: boolean;
  displayValue?: string;
  whatsapp_body_values?: string;
  greeting_message?: string;
  agent_name?: string;
};

// 🔥 Utility type → resolves correct value shape based on `multiple`
export type DropdownValue<Multiple extends boolean> = Multiple extends true
  ? optionType[]
  : optionType | null;

export type InfiniteAutocompleteProps<Multiple extends boolean = false> = {
  value?: DropdownValue<Multiple>;
  onChange?: (
    event: React.SyntheticEvent,
    value: DropdownValue<Multiple>
  ) => void;

  isCreatable?: boolean;
  onCreate?: (newValue: optionType) => Promise<any>;
  getOptionLabelFromItem?: (item: optionType) => string;
  mapResponseToOptions?: (response: any) => optionType[];

  formLabel?: string;
  placeholder?: string;
  isRequired?: boolean;
  errorMessage?: string;
  variableToken?: string;
  description?: string;

  onVariableClick?: (token: string) => void;

  multiple?: Multiple;

  filterValue?: any;
  isOnboard?: boolean;

  options?: optionType[];
} & Partial<AutocompleteProps<optionType, Multiple, false, false>>;
