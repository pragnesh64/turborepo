import { useEffect, useState } from "react";
import { Segmented } from "antd";
import { AlignCenterOutlined } from "@ant-design/icons";

import { Import, Left, Merge, Plus } from "@shared/components";
import { SubHeader } from "@shared/components/layout/SubHeader";
import { useAlert } from "@shared/context";

const DEFAULT_TAB = "start";

function Dashboard() {
  const showAlert = useAlert();
  const [tab, setTab] = useState<string>(DEFAULT_TAB);

  useEffect(() => {
    showAlert("No changes detected", "info");
  }, [showAlert]);

  return (
    <SubHeader
      className="bg-grey"
      config={{
        leftItems: [
          { type: "title", value: "Contact" },
          { type: "filterTag", tags: ["100"] },
        ],
        rightItems: [
          {
            type: "button",
            label: "Merge",
            subType: "default",
            icon: <Merge />,
          },
          {
            type: "button",
            label: "Import",
            subType: "default",
            icon: <Import />,
            variant: "outlined",
            color: "default",
          },
          {
            type: "button",
            label: "Create",
            subType: "primary",
            icon: <Plus />,
          },
          {
            type: "component",
            component: (
              <Segmented
                value={tab}
                onChange={setTab}
                className="mt-[2px]"
                options={[
                  { value: "start", icon: <Left /> },
                  { value: "center", icon: <AlignCenterOutlined /> },
                ]}
              />
            ),
            items: [{ key: "1", label: "Settings" }],
          },
        ],
      }}
    />
  );
}

export default Dashboard;
