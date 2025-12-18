import React from "react";
import { Drawer, Row, Col, Input } from "antd";
import Button from "@shared/components/primitives/Button";
import { ViewDrawerProps, ViewField } from "./type";
import { getNestedValue, TEXTAREA_THRESHOLD } from "./contact";

const ViewDrawer: React.FC<ViewDrawerProps> = ({
  open,
  onClose,
  title = "View",
  placement = "right",
  width = 604,
  rowData = {},
  fields = [],
}) => {
  const resolvedFields: ViewField[] =
    fields.length > 0
      ? fields
      : Object.keys(rowData).map((key) => ({
          label: key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()),
          fieldName: key,
        }));

  return (
    <Drawer
      open={open}
      onClose={onClose}
      placement={placement}
      width={width}
      title={null}
      closable={false}
      bodyStyle={{ padding: 16 }}
      drawerStyle={{
        borderRadius: "16px 0 0 16px",
        boxShadow: "0px 0px 30px -5px rgba(0,0,0,0.1)",
        backgroundColor: "#FFFFFF",
      }}
      styles={{
        footer: { borderTop: "none" },
      }}
      footer={
        <div className="px-4">
          <Button
            onclick={onClose}
            className="w-full h-10 rounded-lg border border-gray-300 text-gray-600"
          >
            Cancel
          </Button>
        </div>
      }
    >
      {/* Title */}
      <h1 className="mb-4 font-inter text-[22px] leading-[28px] font-medium tracking-[-0.02em] text-black">
        View {title}
      </h1>

      {/* Fields */}
      <Row gutter={[16, 16]}>
        {resolvedFields.map((field, idx) => {
          const rawValue = getNestedValue(rowData, field.fieldName);

          let displayValue = "-";

          if (field.render) {
            displayValue = field.render(rawValue, rowData);
          } else if (Array.isArray(rawValue)) {
            displayValue = rawValue
              .map((v) =>
                typeof v === "object" ? JSON.stringify(v) : String(v)
              )
              .join(", ");
          } else if (rawValue !== undefined && rawValue !== null) {
            displayValue = String(rawValue);
          }

          const isLongText = displayValue.length > TEXTAREA_THRESHOLD;

          return (
            <Col key={`${field.fieldName}-${idx}`} xs={24}>
              <label className="block text-sm text-gray-600 mb-1">
                {field.label}
              </label>

              {isLongText ? (
                <Input.TextArea
                  value={displayValue}
                  // showCount
                  maxLength={500}
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  disabled
                />
              ) : (
                <Input value={displayValue} disabled />
              )}
            </Col>
          );
        })}
      </Row>
    </Drawer>
  );
};

export default ViewDrawer;
