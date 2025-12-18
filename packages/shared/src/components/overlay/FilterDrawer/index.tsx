import React, { useEffect, useMemo, useState } from "react";
import { Drawer, Input, Select } from "antd";
import Button from "@shared/components/primitives/Button";
import Dropdown from "@shared/components/form/Dropdown";
import { FilterDrawerProps } from "./type";
import { FilterOperator, OPERATOR_MAP } from "./contact";
import { OptionType } from "@shared/components/form/Dropdown/types";

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  open,
  onClose,
  onApply,
  title = "Filter by",
  placement = "right",
  width = 516,
  columns = [],
  filterModel,
  onChangeFilter,
  onClear,
}) => {
  /* ---------------- column → datatype map ---------------- */
  const columnDataTypeMap = useMemo(() => {
    const map: Record<string, string> = {};
    columns.forEach((col) => {
      if (col.field && col.dataType) {
        map[col.field] = col.dataType;
      }
    });
    return map;
  }, [columns]);

  /* ---------------- states ---------------- */
  const [selectedColumn, setSelectedColumn] = useState<any>(null);
  const [selectedOperator, setSelectedOperator] = useState<OptionType | null>(
    null
  );
  const [filterValue, setFilterValue] = useState("");
  const [startValue, setStartValue] = useState("");
  const [endValue, setEndValue] = useState("");

  const [errors, setErrors] = useState({
    column: "",
    operator: "",
    value: "",
    range: "",
  });

  /* ---------------- sync on open ---------------- */
  useEffect(() => {
    if (!open) return;

    const item = filterModel?.items?.[0];
    if (!item) {
      setSelectedColumn(null);
      setSelectedOperator(null);
      setFilterValue("");
      setStartValue("");
      setEndValue("");
      return;
    }

    const col = columns.find((c) => c.field === item.field);
    const columnType = col?.dataType || "string";

    const operators = OPERATOR_MAP[columnType] || OPERATOR_MAP.string;
    const matchedOperator = operators.find((op) => op.value === item.operator);

    setSelectedColumn(
      item.field
        ? { Id: item.field, Value: col?.headerName || item.field }
        : null
    );

    setSelectedOperator(
      item.operator
        ? {
            Id: item.operator,
            Value: matchedOperator?.label || item.operator,
          }
        : null
    );

    if (
      (item.operator === FilterOperator.Between ||
        item.operator === FilterOperator.NotBetween) &&
      Array.isArray(item.value)
    ) {
      const [start, end] = item.value;
      setStartValue(start?.split("T")[0] || "");
      setEndValue(end?.split("T")[0] || "");
      setFilterValue("");
    } else {
      setFilterValue(item.value ?? "");
      setStartValue("");
      setEndValue("");
    }

    setErrors({ column: "", operator: "", value: "", range: "" });
  }, [open, filterModel, columns]);

  const selectedColumnType =
    columnDataTypeMap[selectedColumn?.Id || ""] || "string";

  const operatorOptions =
    OPERATOR_MAP[selectedColumnType] || OPERATOR_MAP.string;

  const handleApply = () => {
    const newErrors = { column: "", operator: "", value: "", range: "" };
    let hasError = false;

    if (!selectedColumn?.Id) {
      newErrors.column = "Please select a column.";
      hasError = true;
    }

    if (!selectedOperator?.Id) {
      newErrors.operator = "Please select an operator.";
      hasError = true;
    }

    const op = selectedOperator?.Id;

    if (op === FilterOperator.Between || op === FilterOperator.NotBetween) {
      if (!startValue || !endValue) {
        newErrors.range = "Please fill both values.";
        hasError = true;
      }
    } else if (selectedColumnType !== "boolean" && filterValue === "") {
      newErrors.value = "Please enter a value.";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    if (op === FilterOperator.Between || op === FilterOperator.NotBetween) {
      const start =
        selectedColumnType === "date" ? `${startValue}T00:00:00Z` : startValue;

      const end =
        selectedColumnType === "date" ? `${endValue}T23:59:59Z` : endValue;

      onChangeFilter({
        items: [
          {
            field: selectedColumn.Id,
            operator: op,
            value: [start, end],
          },
        ],
      });
    } else {
      onChangeFilter({
        items: [
          {
            field: selectedColumn.Id,
            operator: op,
            value: filterValue,
          },
        ],
      });
    }

    onApply();
    onClose();
  };

  const handleClear = () => {
    setSelectedColumn(null);
    setSelectedOperator(null);
    setFilterValue("");
    setStartValue("");
    setEndValue("");
    setErrors({ column: "", operator: "", value: "", range: "" });

    onClear?.();
    onClose();
  };

  return (
    <Drawer
      placement={placement}
      width={width}
      open={open}
      onClose={onClose}
      closable={false}
      title={null}
      bodyStyle={{ padding: 16 }}
      drawerStyle={{
        borderRadius: "16px 0 0 16px",
        boxShadow: "0px 0px 30px -5px rgba(0,0,0,0.1)",
        backgroundColor: "#FFFFFF",
      }}
       styles={{
        footer: {
          borderTop: "none",
        },
      }}
      footer={
        <div className="flex gap-3 px-4">
          <Button
            onclick={handleClear}
            className="w-1/2 h-10 rounded-lg border border-gray-300 text-gray-600"
          >
            Clear
          </Button>

          <Button
            onclick={handleApply}
            className="w-1/2 h-10 rounded-lg !bg-black hover:bg-black"
          >
            Apply Filter
          </Button>
        </div>
      }
    >
      <h1 className="mb-4 font-inter text-[22px] leading-[28px] font-medium tracking-[-0.02em] text-black">
        {title}
      </h1>

      {/* Column */}
      <div className="mb-4">
        <Dropdown
          formLabel="Column"
          placeholder="Select column"
          value={selectedColumn}
          options={columns
            .filter((c) => c.filterable !== false)
            .map((c) => ({
              Id: c.field,
              Value: c.headerName || c.field,
            }))}
          //   error={errors.column}
          onChange={(opt) => {
            setSelectedColumn(opt);
            setSelectedOperator(null);
            setFilterValue("");
          }}
        />
      </div>

      {/* Operator */}
      <div>
        <Dropdown
          key={selectedColumn?.Id || "operator"}
          formLabel="Operator"
          placeholder="Select operator"
          value={selectedOperator}
          options={operatorOptions.map((op) => ({
            Id: op.value,
            Value: op.label,
          }))}
          disabled={!selectedColumn?.Id}
          onChange={(opt) => setSelectedOperator(opt)}
        />
      </div>
      {/* Value Section */}
      {selectedOperator !== null && (
        <div className="mt-4">
          {/* BOOLEAN */}
          {selectedColumnType === "boolean" ? (
            <div>
              <label className="block text-sm text-gray-600 mb-1">Value</label>
              <Select
                className="w-full"
                placeholder="Select value"
                value={filterValue || undefined}
                onChange={(val) => setFilterValue(val)}
                options={[
                  { label: "True", value: "true" },
                  { label: "False", value: "false" },
                ]}
              />
            </div>
          ) : selectedOperator?.Id === FilterOperator.Between ||
            selectedOperator?.Id === FilterOperator.NotBetween ? (
            /* BETWEEN / NOT BETWEEN */
            <div className="w-full flex gap-3 flex-row">
              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">
                  Start
                </label>
                <Input
                  type={selectedColumnType === "date" ? "date" : "number"}
                  value={startValue}
                  onChange={(e) => {
                    setStartValue(e.target.value);
                    setErrors({ ...errors, range: "" });
                  }}
                  status={errors.range ? "error" : ""}
                />
              </div>

              <div className="flex-1">
                <label className="block text-sm text-gray-600 mb-1">End</label>
                <Input
                  type={selectedColumnType === "date" ? "date" : "number"}
                  value={endValue}
                  onChange={(e) => {
                    setEndValue(e.target.value);
                    setErrors({ ...errors, range: "" });
                  }}
                  status={errors.range ? "error" : ""}
                />
                {errors.range && (
                  <p className="text-xs text-red-500 mt-1">{errors.range}</p>
                )}
              </div>
            </div>
          ) : (
            /* DEFAULT VALUE INPUT */
            <div>
              <label className="block text-sm text-gray-600 mb-1">Value</label>
              <Input
                placeholder="Enter value"
                type={
                  selectedColumnType === "number"
                    ? "number"
                    : selectedColumnType === "date"
                    ? "date"
                    : "text"
                }
                value={filterValue}
                maxLength={2000}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                  setErrors({ ...errors, value: "" });
                }}
                status={errors.value ? "error" : ""}
              />
              {errors.value && (
                <p className="text-xs text-red-500 mt-1">{errors.value}</p>
              )}
            </div>
          )}
        </div>
      )}
    </Drawer>
  );
};

export default FilterDrawer;
