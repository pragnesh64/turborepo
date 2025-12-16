// import { useState } from "react";
// import { optionType } from "@shared/components/Dropdown/types";
import CreditsDropdown from "../../../../packages/shared/src/components/CreditsDropdown/index";

function Dashboard() {
  //   const [selectedCountry, setSelectedCountry] = useState<optionType | null>(
  //     null
  //   );

  //   const countryOptions: optionType[] = [
  //     { Id: "1", Value: "India" },
  //     { Id: "2", Value: "Canada" },
  //     { Id: "3", Value: "Australia" },
  //     { Id: "4", Value: "Germany" },
  //   ];
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

      <CreditsDropdown />
    </>
  );
}

export default Dashboard;
