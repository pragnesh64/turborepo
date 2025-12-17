import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import type { Alert, AlertContextType, AlertType } from "./types";
import { Close } from "@shared/components/icons";

type InternalAlert = Alert & { visible: boolean };

const AlertContext = createContext<AlertContextType | undefined>(undefined);

type Props = {
  children: ReactNode;
};

export const AlertProvider = ({ children }: Props) => {
  const [alerts, setAlerts] = useState<InternalAlert[]>([]);
  const timeouts = useRef<number[]>([]);
  const rafs = useRef<number[]>([]);
  const portalRoot = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = document.createElement("div");
    portalRoot.current = el;
    document.body.appendChild(el);

    return () => {
      timeouts.current.forEach(clearTimeout);
      rafs.current.forEach(cancelAnimationFrame);
      if (portalRoot.current) {
        document.body.removeChild(portalRoot.current);
      }
    };
  }, []);

  const removeAlert = (id: number) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  const dismissAlert = (id: number, exitDuration = 300) => {
    setAlerts((prev) =>
      prev.map((a) => (a.id === id ? { ...a, visible: false } : a))
    );
    timeouts.current.push(
      window.setTimeout(() => removeAlert(id), exitDuration)
    );
  };

  const showAlert = (message: string, type: AlertType) => {
    const id = Date.now() + Math.random();
    setAlerts((prev) => [...prev, { id, message, type, visible: false }]);

    rafs.current.push(
      requestAnimationFrame(() =>
        rafs.current.push(
          requestAnimationFrame(() =>
            setAlerts((prev) =>
              prev.map((a) =>
                a.id === id ? { ...a, visible: true } : a
              )
            )
          )
        )
      )
    );

    timeouts.current.push(
      window.setTimeout(() => dismissAlert(id), 5000)
    );
  };

  const toastNode = (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          role="alert"
          className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-md border shadow-sm transition-all duration-300
            ${alert.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
            ${
              alert.type === "success"
                ? "bg-green-50 border-green-200 text-green-800"
                : alert.type === "error"
                ? "bg-red-50 border-red-200 text-red-800"
                : alert.type === "info"
                ? "bg-blue-50 border-blue-200 text-blue-800"
                : "bg-yellow-50 border-yellow-200 text-yellow-800"
            }`}
        >
          <span className="flex-1">{alert.message}</span>
          <button onClick={() => dismissAlert(alert.id)}>
            <Close />
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {portalRoot.current && createPortal(toastNode, portalRoot.current)}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => {
  const ctx = useContext(AlertContext);
  if (!ctx) {
    throw new Error("useAlert must be used within AlertProvider");
  }
  return ctx;
};
