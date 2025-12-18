import React, { useMemo } from "react";
import { Input as AntInput, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { CustomInputProps } from "./types";

const Input: React.FC<CustomInputProps> = ({
  formLabel = "",
  required,
  description,
  startIcon,
  endIcon,
  variableToken,
  onVariableClick,
  error,
  placeholder,
  borderRadius = 8,
  maxLength = 100,
  readonly,
  ...props
}) => {
  const hasValidError = useMemo(() => {
    if (!error) return false;

    if (typeof error === "string") return error.trim().length > 0;
    if (Array.isArray(error)) return error.some((e) => String(e).trim());
    if (typeof error === "object") return Object.keys(error).length > 0;

    return false;
  }, [error]);

  const formatError = useMemo(() => {
    if (!hasValidError) return "";

    if (typeof error === "string") return error;
    if (Array.isArray(error)) return error.join(", ");
    if (typeof error === "object")
      return Object.values(error).filter(Boolean).join(", ");

    return String(error);
  }, [error, hasValidError]);

  return (
    <div className="w-full">
      {/* Label */}
      {formLabel && (
        <label className="text-sm font-medium text-gray-800 mb-2 flex font-inter items-center gap-1">
          <span>{formLabel}</span>
          {required && <span className="text-red-500">*</span>}

          {description && (
            <Tooltip title={description}>
              <InfoCircleOutlined className="text-gray-400 text-xs cursor-pointer" />
            </Tooltip>
          )}

          {/* {variableToken && onVariableClick && (
            <Tag
              color="blue"
              className="ml-auto cursor-pointer font-mono text-xs"
              onClick={() => onVariableClick(variableToken)}
            >
              {{`${variableToken}`}}
            </Tag>
          )} */}
        </label>
      )}

      {/* Input Wrapper */}
      <div
        className={`
          flex items-center  bg-white border px-3  transition-all
          ${hasValidError ? "border-red-500" : "border-gray-300"}
          hover:${hasValidError ? "border-red-500" : "border-gray-400"}
          focus-within:${hasValidError ? "border-red-500" : "border-gray-400"}
        `}
        style={{ borderRadius, height: 40 }}
      >
        {/* Start Icon */}
        {startIcon && <span className="mr-2 text-gray-500">{startIcon}</span>}

        {/* Ant Input */}
        <AntInput
          {...props}
          readOnly={readonly}
          maxLength={maxLength}
          bordered={false}
          placeholder={placeholder}
          className="flex-1 text-gray-900 placeholder-gray-400 h-10"
        />

        {/* End Icon */}
        {endIcon && <span className="ml-2 text-gray-500">{endIcon}</span>}
      </div>

      {/* Error Message */}
      {hasValidError && (
        <p className="text-xs text-red-500 mt-1">{formatError}</p>
      )}
    </div>
  );
};

export default Input;
