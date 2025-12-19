import { antdTheme } from "@shared/antd-theme";
import { ConfigProvider } from "antd";

export function AntTheamProvider({ children }: { children: React.ReactNode }) {
  return <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>;
}
