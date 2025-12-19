import CustomInput from "@shared/components/form/Input";

import { useAlert } from "@shared/context";
import { useEffect} from "react";
import DemoFilterDrawer from "./DemoFilterDrawer";
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

      <CustomInput formLabel="Name" required placeholder="Enter Name" />
      <CustomInput formLabel="Last Name" placeholder="Last Name" />

      {/* <Dropdown
        formLabel="Category"
        placeholder="Create or Select Category"
        apiUrl="https://api.salesbot.cloud/onboard/state/fetch_all"
        value={categoryLookUp}
        client={AuthClient}
        onChange={(option) => {
          if (option) {
            setCategoryLookUp(option as OptionType);
          } else {
            setCategoryLookUp(null);
          }
        }}
        isCreatable={true}
        onCreate={(value) => createCategory({ name: value })}
        isRequired={true}
        pageSize={10}
        mapResponseToOptions={(res) =>
          res.data.data?.map((item: any) => ({
            Id: item.id || item.value,
            Value: item.name || item.label,
          })) || []
        }
      /> */}
      {/* // TODO: Demo only – remove this component when used in actual implementation */}
      <DemoFilterDrawer/>
    </>
  );
}

export default Dashboard;
