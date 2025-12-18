export type AlertType = "success" | "error" | "info" | "warning";

export type Alert = {
  id: number;
  message: string;
  type: AlertType;
};

export type AlertContextType = {
  showAlert: (message: string, type: AlertType) => void;
};
