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
import type { JSX } from "react/jsx-runtime";
import { Close } from "@shared/components/icons";

type InternalAlert = Alert & { visible: boolean };

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
    const [alerts, setAlerts] = useState<InternalAlert[]>([]);
    const timeouts = useRef<number[]>([]);
    const rafs = useRef<number[]>([]);
    const portalRoot = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = document.createElement("div");
        portalRoot.current = el;
        document.body.appendChild(el);
        return () => {
            timeouts.current.forEach((t) => clearTimeout(t));
            rafs.current.forEach((r) => cancelAnimationFrame(r));
            if (portalRoot.current) document.body.removeChild(portalRoot.current);
        };
    }, []);

    const removeAlertImmediate = (id: number) => {
        setAlerts((prev) => prev.filter((a) => a.id !== id));
    };

    const dismissAlert = (id: number, exitDuration = 300) => {
        setAlerts((prev) =>
            prev.map((a) => (a.id === id ? { ...a, visible: false } : a))
        );
        const t = window.setTimeout(() => removeAlertImmediate(id), exitDuration);
        timeouts.current.push(t);
    };

    const showAlert = (message: string, type: AlertType) => {
        const id = Date.now() + Math.floor(Math.random() * 1000);
        setAlerts((prev) => [...prev, { id, message, type, visible: false }]);

        const r1 = requestAnimationFrame(() => {
            const r2 = requestAnimationFrame(() => {
                setAlerts((prev) =>
                    prev.map((a) => (a.id === id ? { ...a, visible: true } : a))
                );
            });
            rafs.current.push(r2);
        });
        rafs.current.push(r1);

        const showDuration = 5000;
        const t = window.setTimeout(() => {
            dismissAlert(id);
        }, showDuration);
        timeouts.current.push(t);
    };

    const getIcon = (type: AlertType) => {
        const icons: Record<AlertType, JSX.Element> = {
            success: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                    />
                </svg>
            ),
            error: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L4.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                </svg>
            ),
            info: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12A9 9 0 113 12a9 9 0 0118 0z"
                    />
                </svg>
            ),
            warning: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 text-yellow-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a1.5 1.5 0 001.29 2.25h17.78a1.5 1.5 0 001.29-2.25L13.71 3.86a1.5 1.5 0 00-2.42 0z"
                    />
                </svg>
            ),
        };
        return icons[type];
    };
    const toastNode = (
        <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
            {alerts.map((alert) => (
                <div
                    key={alert.id}
                    role="alert"
                    aria-live="assertive"
                    className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-md border text-sm font-medium
          shadow-sm transition-all duration-300 ease-out
          ${alert.type === "success"
                            ? "bg-green-50 border-green-200 text-green-800"
                            : ""
                        }
          ${alert.type === "error"
                            ? "bg-red-50 border-red-200 text-red-800"
                            : ""
                        }
          ${alert.type === "info"
                            ? "bg-blue-50 border-blue-200 text-blue-800"
                            : ""
                        }
          ${alert.type === "warning"
                            ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                            : ""
                        }
          ${alert.visible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-2"
                        }
        `}
                >
                    <div className="flex-shrink-0">{getIcon(alert.type)}</div>
                    <div className="flex-1">{alert.message}</div>
                    <button
                        aria-label="Close alert"
                        className="ml-2 text-gray-400 hover:text-gray-600 transition-colors"
                        onClick={() => dismissAlert(alert.id)}
                    >
                        <Close />
                    </button>
                </div>
            ))}
        </div>
    );

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            {portalRoot.current ? createPortal(toastNode, portalRoot.current) : null}
        </AlertContext.Provider>
    );
};

export const useAlert = () => {
    const ctx = useContext(AlertContext);
    if (!ctx) throw new Error("useAlert must be used within AlertProvider");
    return ctx.showAlert;
};
