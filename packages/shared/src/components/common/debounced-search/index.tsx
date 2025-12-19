import { Input } from "antd";
import { useEffect, useState } from "react";

import { useDebounce } from "@shared/hooks/useDebounce";
import { Search } from "@shared/components/icons";

import { DebouncedSearchProps } from "./types";
import "./style.css";

export const DebouncedSearch = ({
  placeholder = "Search",
  delay = 500,
  minLength = 2,
  onSearch,
  className = "",
}: DebouncedSearchProps) => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, delay);

  useEffect(() => {
    const shouldTriggerSearch =
      debouncedValue === "" || debouncedValue.length >= minLength;

    if (shouldTriggerSearch) {
      onSearch(debouncedValue);
    }
  }, [debouncedValue, minLength, onSearch]);

  return (
    <Input
      allowClear
      value={value}
      placeholder={placeholder}
      prefix={<Search />}
      onChange={(e) => setValue(e.target.value)}
      className={`ant-input-affix-wrapper ${className}`}
    />
  );
};
