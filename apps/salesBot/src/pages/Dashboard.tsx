import axios from "axios";
import { useState } from "react";
import CreditsDropdown from "@shared/components/overlay/CreditsDropdown";
import InfiniteDropdown, { OptionType } from "@shared/components/form/Dropdown";
import CustomInput from "@shared/components/form/Input";

function Dashboard() {
  const [categoryLookUp, setCategoryLookUp] = useState<OptionType | null>(null);

  const createCategory = async (data: { name: string }) => {
    const response = await axios.post(
      "https://api.salesbot.cloud/core/product_category/",
      data
    );
    return response;
  };

  return (
    <>
      <CreditsDropdown />

      <CustomInput formLabel="Name" required placeholder="Enter Name" />
      <CustomInput formLabel="Last Name" placeholder="Last Name" />

      <InfiniteDropdown
        formLabel="Category"
        placeholder="Create or Select Category"
        apiUrl="https://api.salesbot.cloud/onboard/state/fetch_all"
        value={categoryLookUp}
        onChange={(option) => {
          if (option) {
            setCategoryLookUp(option as OptionType);
          } else {
            setCategoryLookUp(null);
          }
        }}
        isCreatable={true}
        onCreate={(value) => {
          return createCategory({ name: value });
        }}
        isRequired={true}
        pageSize={10}
        mapResponseToOptions={(res) =>
          res.data.data?.map((item: any) => ({
            Id: item.id || item.value,
            Value: item.name || item.label,
          })) || []
        }
      />
    </>
  );
}

export default Dashboard;
