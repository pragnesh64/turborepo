import React from "react";
import { Drawer, Row, Col, Input } from "antd";
import { ViewDrawerProps } from "./type";
import { getNestedValue, TEXTAREA_THRESHOLD } from "./contact";
import Button from "@shared/components/primitives/Button";

const ViewDrawer: React.FC<ViewDrawerProps> = ({
  open,
  onClose,
  title = "View",
  placement = "right",
  width = 604,
  rowData = {},
  fields = [],
}) => {
  const resolvedFields =
    fields.length > 0
      ? fields
      : Object.keys(rowData || {}).map((key) => ({
          label: key
            .replace(/_/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase()),
          fieldName: key,
        }));

  return (
    <>
      
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
          footer: {
            borderTop: "none",
          },
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
          {resolvedFields.map((field: any, idx) => {
            const rawValue = getNestedValue(rowData, field.fieldName);

            let displayValue : any = rawValue ?? "-";

            if (field.render) {
              displayValue = field.render(rawValue, rowData);
            } else if (Array.isArray(rawValue)) {
              displayValue = rawValue
                .map((v) =>
                  typeof v === "object" ? JSON.stringify(v) : String(v)
                )
                .join(", ");
            } else if (typeof rawValue === "object" && rawValue !== null) {
              displayValue = JSON.stringify(rawValue);
            }

            const isLongText =
              typeof displayValue === "string" &&
              displayValue.length > TEXTAREA_THRESHOLD;

            const fieldKey = `${field.fieldName}-${idx}`;

            return (
              <Col key={fieldKey} xs={24}>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-sm text-gray-600">{field.label}</label>
                </div>

                {isLongText ? (
                  <>
                    <Input.TextArea
                      value={displayValue}
                      // showCount
                      maxLength={500}
                      autoSize={{ minRows: 3, maxRows: 5 }}
                      disabled
                    />
                  </>
                ) : (
                  <Input value={displayValue} disabled />
                )}
              </Col>
            );
          })}
        </Row>
      </Drawer>
    </>
  );
};

export default ViewDrawer;
