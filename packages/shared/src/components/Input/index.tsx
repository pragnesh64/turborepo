// import React from "react";
// // import {
// //   FormLabel,
// //   TextField as MUITextField,
// //   InputAdornment,
// //   Box,
// //   Tooltip,
// //   Chip,
// // } from "@mui/material";
// // import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import type { CustomTextFieldProps } from "./types";

// const Input: React.FC<CustomTextFieldProps & { description?: string }> = ({
//   formLabel = "",
//   formLabelProps,
//   startIcon,
//   endIcon,
//   InputProps,
//   error,
//   required,
//   sx,
//   placeholder,
//   fullWidth = true,
//   variableToken,
//   onVariableClick,
//   borderRadius,
//   maxLength = 100,
//   description,
//   readonly = false,
//   onKeyDown,
//   defaultValue,
//   ...props
// }) => {
//   const hasValidError = React.useMemo(() => {
//     if (!error) return false;

//     if (typeof error === "string") {
//       return (error as any).trim().length > 0;
//     }

//     if (Array.isArray(error)) {
//       return (
//         error.length > 0 &&
//         error.some((item) => item && String(item).trim().length > 0)
//       );
//     }

//     if (typeof error === "object") {
//       return Object.keys(error).length > 0;
//     }

//     return true;
//   }, [error]);

//   const formatErrorMessage = React.useMemo(() => {
//     if (!hasValidError) return "";

//     if (typeof error === "string") {
//       return error;
//     }

//     if (Array.isArray(error)) {
//       return error
//         .filter((item) => item && String(item).trim().length > 0)
//         .join(", ");
//     }

//     if (typeof error === "object" && error !== null) {
//       const errorObj = error as any;
//       if (errorObj.message) return String(errorObj.message);
//       return Object.values(error).filter(Boolean).join(", ");
//     }

//     return String(error);
//   }, [error, hasValidError]);

//   return (
//     <Box width={fullWidth as any}>
//       {formLabel && (
//         <FormLabel
//           {...formLabelProps}
//           sx={{
//             fontSize: "13px",
//             fontWeight: 500,
//             color: "#1F2937",
//             display: "flex",
//             justifyContent: "space-between",
//             alignItems: "flex-start",
//             gap: 1,
//             width: "100%",
//             fontFamily: "inherit",
//             textAlign: "left",
//             marginBottom: "8px",
//             ...formLabelProps?.sx,
//           }}
//         >
//           <Box
//             component="span"
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               gap: 0.5,
//               flexShrink: 1,
//               minWidth: 0,
//               overflow: "hidden",
//               whiteSpace: "nowrap",
//               textOverflow: "ellipsis",
//             }}
//           >
//             <span
//               style={{
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 whiteSpace: "nowrap",
//                 display: "flex",
//                 gap: "2px",
//               }}
//             >
//               {formLabel}
//               {required && <span style={{ color: "#EF4444" }}>*</span>}
//             </span>

//             {/* {description && (
//               <Tooltip title={description}>
//                 <InfoOutlinedIcon
//                   sx={{
//                     fontSize: 16,
//                     color: "#9CA3AF",
//                     cursor: "help",
//                     flexShrink: 0,
//                   }}
//                 />
//               </Tooltip>
//             )} */}
//           </Box>

//           {variableToken && onVariableClick && (
//             <Chip
//               label={`{{${variableToken}}}`}
//               size="small"
//               onClick={() => onVariableClick(variableToken)}
//               sx={{
//                 fontSize: "12px",
//                 height: "22px",
//                 fontFamily: "monospace",
//                 bgcolor: "#EEF2FF",
//                 color: "#4F46E5",
//                 cursor: "pointer",
//                 maxWidth: "50%",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//                 whiteSpace: "nowrap",
//               }}
//             />
//           )}
//         </FormLabel>
//       )}

//       <Box>
//         <MUITextField
//           key={
//             typeof formLabel === "string" || typeof formLabel === "number"
//               ? formLabel
//               : undefined
//           }
//           error={hasValidError}
//           helperText={
//             hasValidError && formatErrorMessage ? (
//               <span
//                 style={{
//                   color: "#EF4444",
//                   fontSize: "0.75rem",
//                   marginLeft: "2px",
//                 }}
//               >
//                 {formatErrorMessage}
//               </span>
//             ) : null
//           }
//           variant="outlined"
//           size="small"
//           disabled={readonly || props.disabled}
//           fullWidth={fullWidth}
//           placeholder={placeholder}
//           onKeyDown={onKeyDown}
//           defaultValue={defaultValue}
//           onClick={
//             props.type === "date" ||
//             props.type === "month" ||
//             props.type === "datetime-local"
//               ? (e) => (e.target as HTMLInputElement).showPicker?.()
//               : undefined
//           }
//           InputProps={{
//             startAdornment: startIcon && (
//               <InputAdornment position="start">{startIcon}</InputAdornment>
//             ),
//             endAdornment: endIcon && (
//               <InputAdornment position="end">{endIcon}</InputAdornment>
//             ),
//             ...InputProps,
//           }}
//           inputProps={{
//             maxLength: maxLength,
//             ...props.inputProps,
//             ...(props?.minDate ? { min: props?.minDate } : {}),
//             ...(props?.maxDate ? { max: props?.maxDate } : {}),
//           }}
//           sx={{
//             ...sx,
//             "& .MuiOutlinedInput-root": {
//               backgroundColor: "#FFFFFF",
//               color: "#111827",
//               borderRadius: borderRadius || "12px",
//               border: hasValidError ? "1px solid #EF4444" : "1px solid #D1D5DB",
//               transition: "all 0.15s ease",
//               fontSize: "14px",
//               height: "44px",

//               "& fieldset": {
//                 border: "none",
//               },

//               "&.Mui-focused": {
//                 borderColor: hasValidError ? "#EF4444" : "#9CA3AF",
//                 boxShadow: "none",
//               },

//               "&:hover": {
//                 borderColor: hasValidError ? "#EF4444" : "#9CA3AF",
//               },

//               "&.Mui-disabled": {
//                 backgroundColor: "#F9FAFB",
//                 color: "#9CA3AF",
//               },

//               "& input": {
//                 padding: "11px 14px",
//                 fontSize: "14px",
//                 lineHeight: "20px",
//                 color: "#111827",

//                 "&::placeholder": {
//                   color: "#9CA3AF",
//                   opacity: 1,
//                   fontSize: "14px",
//                 },
//               },
//             },

//             "& .MuiInputLabel-root": {
//               color: "#6B7280",
//               fontSize: "14px",
//             },

//             "& .MuiInputLabel-root.Mui-focused": {
//               color: hasValidError ? "#EF4444" : "#374151",
//             },

//             "& .MuiFormHelperText-root": {
//               marginLeft: 0,
//               marginTop: "4px",
//             },

//             input: {
//               "&::-ms-reveal": {
//                 display: "none",
//               },
//               "&::-ms-clear": {
//                 display: "none",
//               },
//               "&::-webkit-clear-button": {
//                 display: "none",
//               },
//               "&::-webkit-reveal-button": {
//                 display: "none",
//               },
//               "&::-webkit-textfield-decoration-container": {
//                 display: "none",
//               },
//             },
//           }}
//           {...props}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Input;
