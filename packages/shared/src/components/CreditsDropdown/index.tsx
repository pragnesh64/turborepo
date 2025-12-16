import React, { useState } from "react";
import { Dropdown, Progress, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import AvailableCreditsIcon from "@shared/assets/icons/AvailableCredits";
import DownArrow from "@shared/assets/icons/DownArrow";
import Button from "../Button";

export default function CreditsDropdown() {
  const [open, setOpen] = useState(false);

  // 🔹 API RESPONSE (example)
  const apiResponse = {
    final_result: {
      total: 60000,
      used: 2976,
      total_storage: 15,
      used_storage: 0,
      email_credits_total: 20000,
      email_credits_used: 0,
    },
  };

  const data = apiResponse.final_result;

  const dropdownContent = (
    <div className="w-80 p-6 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col gap-6">
      {/* 🔹 Messages Used */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center text-sm font-medium text-gray-900">
          <div className="flex items-center gap-1.5">
            <span>
              Messages Used: {data.used}/{data.total}
            </span>
            <Tooltip title="More information">
              <InfoCircleOutlined className="text-gray-400 cursor-pointer" />
            </Tooltip>
          </div>
          <span className="text-xs text-gray-600">
            {((data.used / data.total) * 100).toFixed(1)}%
          </span>
        </div>

        <Progress
          percent={(data.used / data.total) * 100}
          showInfo={false}
          strokeLinecap="round"
          strokeColor={{ from: "#4D9A00", to: "#00B96F" }}
          railColor="#F3F4F6"
        />
      </div>

      {/* 🔹 Storage Used (NO info icon) */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center text-sm font-medium text-gray-900">
          <div className="flex items-center gap-1.5">
            <span>
              Storage Used (GB): {data.used_storage}/{data.total_storage}
            </span>
          </div>
          <span className="text-xs text-gray-600">
            {data.total_storage > 0
              ? ((data.used_storage / data.total_storage) * 100).toFixed(1)
              : "0.0"}
            %
          </span>
        </div>

        <Progress
          percent={
            data.total_storage > 0
              ? (data.used_storage / data.total_storage) * 100
              : 0
          }
          showInfo={false}
          strokeLinecap="round"
          strokeColor={{ from: "#4D9A00", to: "#00B96F" }}
          railColor="#F3F4F6"
        />
      </div>

      {/* 🔹 Email Used */}
      <div className="flex flex-col gap-1">
        <div className="flex justify-between items-center text-sm font-medium text-gray-900">
          <div className="flex items-center gap-1.5">
            <span>
              Email Used: {data.email_credits_used}/{data.email_credits_total}
            </span>
            <Tooltip title="More information">
              <InfoCircleOutlined className="text-gray-400 cursor-pointer" />
            </Tooltip>
          </div>
          <span className="text-xs text-gray-600">
            {(
              (data.email_credits_used / data.email_credits_total) *
              100
            ).toFixed(1)}
            %
          </span>
        </div>

        <Progress
          percent={(data.email_credits_used / data.email_credits_total) * 100}
          showInfo={false}
          strokeLinecap="round"
          strokeColor={{ from: "#4D9A00", to: "#00B96F" }}
          railColor="#F3F4F6"
        />
      </div>

      {/* 🔹 Buy Credit Button */}
      <Button
        variantType="primary"
        className="bg-black hover:bg-black text-white font-semibold rounded-md"
        block
        size="large"
        onClick={() => alert("Buy Credit clicked")}
      >
        Buy Credit
      </Button>
    </div>
  );

  return (
    <Dropdown
      trigger={["click"]}
      dropdownRender={() => dropdownContent}
      placement="bottomRight"
      open={open}
      onOpenChange={setOpen}
    >
      <div>
        <Button className="flex items-center gap-2 px-4 py-2 !bg-[#FFFBEB] shadow-sm border !border-[#FFFBEB] rounded-md font-inter text-black normal-case">
          <AvailableCreditsIcon size={16} />
          Available Credits
          <DownArrow size={20} />
        </Button>
      </div>
    </Dropdown>
  );
}
