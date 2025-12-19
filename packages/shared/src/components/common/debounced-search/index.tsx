import { Input } from "antd";
import { useState, useEffect } from "react";
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
    if (debouncedValue.length >= minLength || debouncedValue === "") {
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
      className={`
       ant-input-affix-wrapper ${className}
      `}
    />
  );
};
