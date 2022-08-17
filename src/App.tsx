import * as React from "react";
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import "antd/dist/antd.less";
import "./index.css";
import MenuPage from "./views/menu/MenuPage";

export default function App() {
  return (
    <ConfigProvider locale={zhCN}>
      <MenuPage />
    </ConfigProvider>
  );
}
