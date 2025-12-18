import { AxiosResponse } from "axios";

export type OptionType = {
  Id: string;
  Value: string;
  displayValue?: string;
  isNew?: boolean;
};

export interface InfiniteDropdownProps<M extends boolean = false> {
  apiUrl?: string;
  pageSize?: number;
  multiple?: M;
  value?: M extends true ? OptionType[] | null : OptionType | null;
  onChange?: (
    value: M extends true ? OptionType[] | null : OptionType | null
  ) => void;
  options?: OptionType[];
  client: any;
  isCreatable?: boolean;
  onCreate?: (label: string) => Promise<any>;
  formLabel?: string;
  placeholder?: string;
  errorMessage?: string;
  isRequired?: boolean;
  filterValue?: Record<string, unknown>;
  mapResponseToOptions?: (response: AxiosResponse) => OptionType[];
  disabled?: boolean;
  className?: string;
}
