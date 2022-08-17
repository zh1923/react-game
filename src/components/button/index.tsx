import * as React from "react";
import "./index.less";
import { Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

type PropsType = {
  type?: "primary" | "error";
  loading?: boolean;
  onClick: (params: any) => void;
};

export default class ZButton extends React.Component<PropsType, any> {
  constructor(props: PropsType) {
    super(props);
  }

  handClick(e: any) {
    var onClick = this.props.onClick; // https://github.com/ant-design/ant-design/issues/30207

    if (this.props.loading) {
      e.preventDefault();
      return;
    }

    onClick === null || onClick === void 0 ? void 0 : onClick(e);
  }

  render() {
    return (
      <button
        onClick={(e) => this.handClick(e)}
        className={`${this.props.type ?? ""} ${
          this.props.loading ? "loading" : ""
        }`}
      >
        {this.props.loading ? <LoadingOutlined className="loading-icon" /> : ""}
        111
      </button>
    );
  }
}
