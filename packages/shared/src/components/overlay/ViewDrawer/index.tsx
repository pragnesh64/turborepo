import React from "react";
import { Drawer, Row, Col, Input } from "antd";
import Button from "@shared/components/primitives/Button";
import { ViewDrawerProps, ViewField, ViewTypeList } from "./type";
import { getNestedValue, TEXTAREA_THRESHOLD } from "./contact";
import { Typography } from "antd";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const { Title, Paragraph, Text } = Typography;

const ViewDrawer: React.FC<ViewDrawerProps> = ({
  open,
  onClose,
  title = "View",
  placement = "right",
  width = 604,
  rowData = {},
  fields = [],
  aiSummary,
  viewType = ViewTypeList.FORM,
  summaryComponent,
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

  const renderView = () => {
    switch (viewType) {
      case ViewTypeList.FORM:
        return (
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
        );

      case ViewTypeList.AI_SUMMARY:
        return (
          <div className="summary-content [&_ul]:pl-4 [&_ul]:mb-2 [&_li]:list-disc [&_li]:mb-1">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <Title level={4} style={{ marginBottom: 12 }}>
                    {children}
                  </Title>
                ),
                h2: ({ children }) => (
                  <Title level={5} style={{ marginBottom: 10 }}>
                    {children}
                  </Title>
                ),
                h3: ({ children }) => (
                  <Title level={5} style={{ fontWeight: 500, marginBottom: 8 }}>
                    {children}
                  </Title>
                ),
                p: ({ children }) => (
                  <Paragraph style={{ marginBottom: 8 }}>{children}</Paragraph>
                ),
                ul: ({ children }) => (
                  <ul style={{ paddingLeft: 20, marginBottom: 8 }}>
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li style={{ marginBottom: 4 }}>
                    <Text>{children}</Text>
                  </li>
                ),
                strong: ({ children }) => <Text strong>{children}</Text>,
                em: ({ children }) => <Text italic>{children}</Text>,
              }}
            >
              {aiSummary}
            </ReactMarkdown>
          </div>
        );

      case ViewTypeList.SUMMARY:
        return summaryComponent ?? null;

      default:
        return null;
    }
  };

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
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white px-4 pb-2">
        <h1 className="font-inter text-[22px] font-medium tracking-tighter text-black">
          {viewType === "form" ? "View" : ""} {title}
        </h1>
      </div>
      <div className="overflow-y-auto px-4 py-4 h-[calc(100vh-125px)]">
      {renderView()}
      </div>
    </Drawer>
  );
};

export default ViewDrawer;
