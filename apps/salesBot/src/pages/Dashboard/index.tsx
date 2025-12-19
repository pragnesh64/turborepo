import CreditsDropdown from "@shared/components/overlay/CreditsDropdown";
import CustomInput from "@shared/components/form/Input";

import { AlignCenterOutlined } from "@ant-design/icons";
import { Import, Left, Merge, Plus } from "@shared/components";
import { SubHeader } from "@shared/components/layout/subHeader";
import { useAlert } from "@shared/context";
import { Segmented } from "antd";
import { useEffect, useState } from "react";

function Dashboard() {
  // const [categoryLookUp, setCategoryLookUp] = useState<OptionType | null>(null);

  // const createCategory = async (data: { name: string }) => {
  //   const response = await axios.post(
  //     "https://api.salesbot.cloud/core/product_category/",
  //     data
  //   );
  //   return response;
  // };

  const showAlert = useAlert();
  const [tab, setTab] = useState("start");
  //   const [selectedCountry, setSelectedCountry] = useState<optionType | null>(
  //     null
  //   );

  //   const countryOptions: optionType[] = [
  //     { Id: "1", Value: "India" },
  //     { Id: "2", Value: "Canada" },
  //     { Id: "3", Value: "Australia" },
  //     { Id: "4", Value: "Germany" },
  //   ];

  useEffect(() => {
    showAlert("No changes detected", "info");
  }, []);
  return (
    <>
      {/* <Box sx={{ width: 320, mb: 4 }}>
        <Dropdown
          formLabel="Country"
          placeholder="Select country"
          value={selectedCountry}
          onChange={(e, v) => setSelectedCountry(v)}
          options={countryOptions}
          isCreatable
        />
      </Box> */}
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
              // color: "default",
              // variant: "solid",
            },
            {
              type: "component",
              // label: <More />,
              component: (
                <>
                  <Segmented
                    value={tab}
                    style={{ marginTop: 2 }}
                    onChange={setTab}
                    options={[
                      {
                        value: "start",
                        icon: <Left />,
                      },
                      {
                        value: "center",
                        icon: <AlignCenterOutlined />,
                      },
                    ]}
                  />
                </>
              ),
              items: [{ key: "1", label: "Settings" }],
            },
          ],
        }}
      />
    </>
  );
}

export default Dashboard;
