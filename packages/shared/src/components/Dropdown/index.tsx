// /* eslint-disable react-hooks/exhaustive-deps */
// import { useState } from "react";
// import { Autocomplete, FilterOptionsState } from "@mui/material";
// // import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

// import Input from "../Input";
// import type {
//   InfiniteAutocompleteProps,
//   optionType,
//   DropdownValue,
// } from "./types";

// const Dropdown = <Multiple extends boolean = false>(
//   props: InfiniteAutocompleteProps<Multiple>
// ) => {
//   const {
//     value,
//     onChange,
//     isCreatable = false,
//     formLabel,
//     placeholder,
//     isRequired,
//     errorMessage,
//     description,
//     variableToken,
//     onVariableClick,
//     options: initialOptions = [],
//     getOptionLabelFromItem = (item) => item.Value ?? "",
//     multiple = false as Multiple,
//     ...autocompleteProps
//   } = props;

//   const [options, setOptions] = useState<optionType[]>([...initialOptions]);
//   const [inputValue, setInputValue] = useState("");

//   // -----------------------------
//   // 🔥 Filter + Creatable Support
//   // -----------------------------
//   const filterOptions = (
//     opts: optionType[],
//     params: FilterOptionsState<optionType>
//   ) => {
//     const filtered = opts.filter((o) =>
//       o.Value.toLowerCase().includes(params.inputValue.toLowerCase())
//     );

//     if (
//       isCreatable &&
//       params.inputValue &&
//       !opts.some((o) => o.Value === params.inputValue)
//     ) {
//       filtered.push({
//         Id: "__create__",
//         Value: params.inputValue,
//         displayValue: `Create "${params.inputValue}"`,
//         isNew: true,
//       });
//     }

//     return filtered;
//   };

//   // -----------------------------
//   // 🔥 onChange Handler
//   // -----------------------------
//   const handleChange = (
//     event: React.SyntheticEvent,
//     newValue: DropdownValue<Multiple>
//   ) => {
//     // Case: multiple
//     if (Array.isArray(newValue)) {
//       const last = newValue[newValue.length - 1];

//       if (last?.isNew) {
//         const created: optionType = {
//           Id: crypto.randomUUID(),
//           Value: last.Value,
//         };

//         setOptions((prev) => [...prev, created]);
//         const updated = [
//           ...newValue.slice(0, -1),
//           created,
//         ] as DropdownValue<Multiple>;

//         onChange?.(event, updated);
//       } else {
//         onChange?.(event, newValue);
//       }
//       return;
//     }

//     // Case: single
//     if (newValue?.isNew) {
//       const created: optionType = {
//         Id: crypto.randomUUID(),
//         Value: newValue.Value,
//       };

//       setOptions((prev) => [...prev, created]);
//       onChange?.(event, created as DropdownValue<Multiple>);
//     } else {
//       onChange?.(event, newValue);
//     }

//     setInputValue("");
//   };

//   return (
//     <Autocomplete
//       multiple={multiple}
//       value={value as any}
//       inputValue={inputValue}
//       options={options}
//       filterOptions={filterOptions}
//       onInputChange={(_, val) => setInputValue(val)}
//       //   popupIcon={<KeyboardArrowDownRoundedIcon />}
//       getOptionLabel={getOptionLabelFromItem}
//       isOptionEqualToValue={(a, b) => a.Id === b.Id}
//       onChange={handleChange}
//       renderOption={(props, option) => (
//         <li {...props} key={option.Id}>
//           {option.isNew ? option.displayValue : option.Value}
//         </li>
//       )}
//       renderInput={(params) => (
//         <Input
//           {...params}
//           required={isRequired}
//           placeholder={placeholder}
//           formLabel={formLabel}
//           description={description}
//           variableToken={variableToken}
//           onVariableClick={onVariableClick}
//           error={Boolean(errorMessage)}
//           helperText={
//             errorMessage ? (
//               <span style={{ color: "#FF4014", fontSize: "0.80rem" }}>
//                 {errorMessage}
//               </span>
//             ) : null
//           }
//         />
//       )}
//       sx={{
//         "& .MuiAutocomplete-inputRoot": {
//           paddingTop: "1px !important",
//           paddingBottom: "0px !important",
//         },
//       }}
//       {...autocompleteProps}
//     />
//   );
// };

// export default Dropdown;
