import { useAlertContext } from "./AlertContext";

export const useAlert = () => {
  return useAlertContext().showAlert;
};
