import React from "react";
import { Input, Button, Dropdown, Tag } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import {
  SubHeaderItem,
  SubHeaderLeftItem,
  SubHeaderProps,
  SubHeaderRightItem,
} from "./types";

export const SubHeader: React.FC<SubHeaderProps> = ({ config }) => {
  const { leftItems = [], rightItems = [], className = "" } = config;

  // Generic render function
  const renderItem = (item: SubHeaderItem, idx: number) => {
    switch (item.type) {
      // LEFT ITEM TYPES
      case "title":
        return (
          <h2
            key={idx}
            className="font-medium text-[length:var(--font-size-sm)] text-primary"
          >
            {item.value}
          </h2>
        );

      case "search":
        return (
          <Input.Search
            key={idx}
            placeholder={item.placeholder || "Search"}
            allowClear
            onSearch={(item as SubHeaderLeftItem).onSearch}
            className="w-52 [&_.ant-input]:rounded-[var(--radius-md)] [&_.ant-input]:border-[var(--color-muted)]"
          />
        );

      case "filterTag":
        return (item as SubHeaderLeftItem).tags?.map((tag, tIdx) => (
          <Tag
            key={tIdx}
            color="default"
            className="border border-[var(--color-muted)] text-[var(--text-muted)]"
          >
            {tag}
          </Tag>
        ));

      // RIGHT ITEM TYPES
      case "button":
        return (
          <Button
            key={(item as SubHeaderRightItem).key || idx}
            onClick={(item as SubHeaderRightItem).onClick}
            style={(item as SubHeaderRightItem).style}
            variant={(item as SubHeaderRightItem).variant}
            type={(item as SubHeaderRightItem).subType}
            className={`flex items-center gap-1 rounded-[var(--radius-md)]
              ${
                item.subType === "primary"
                  ? "bg-[var(--btn-bg-primary)] text-[var(--text-white)]"
                  : item.subType === "default"
                  ? "bg-[var(--btn-bg-secondary)] text-[var(--text-white)]"
                  : ""
              }`}
          >
            {(item as SubHeaderRightItem).icon}
            {(item as SubHeaderRightItem).label}
          </Button>
        );

      case "dropdown":
        return (
          <Dropdown
            key={(item as SubHeaderRightItem).key || idx}
            menu={{ items: (item as SubHeaderRightItem).items || [] }}
            placement="bottomRight"
          >
            <Button className="bg-[var(--color-white)] border border-[var(--color-muted)] rounded-[var(--radius-md)]">
              {(item as SubHeaderRightItem).label || <MoreOutlined />}
            </Button>
          </Dropdown>
        );

      case "component":
        return <div key={idx}>{item.component}</div>;

      default:
        return null;
    }
  };

  return (
    <div
      className={`flex items-center justify-between px-[var(--spacing-4)] py-[var(--spacing-3)] bg-[var(--color-white)] ${className}`}
    >
      <div className="flex items-center gap-[var(--spacing-3)] flex-wrap">
        {leftItems.map(renderItem)}
      </div>

      <div className="flex items-center gap-[var(--spacing-2)] flex-wrap">
        {rightItems.map(renderItem)}
      </div>
    </div>
  );
};
