export interface DebouncedSearchProps {
  placeholder?: string;
  delay?: number;
  minLength?: number;
  onSearch: (value: string) => void;
  className?: string;
}
