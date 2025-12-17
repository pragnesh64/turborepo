// import { useState } from "react";
// import { optionType } from "@shared/components/Dropdown/types";

import { useAlert } from "@shared/context";
import { useEffect } from "react";

function Dashboard() {
  const showAlert = useAlert();
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

    </>
  );
}

export default Dashboard;
