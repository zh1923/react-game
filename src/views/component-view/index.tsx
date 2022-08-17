import * as React from "react";
import { Button } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { ZButton } from "@/components";

export default class ComponentView extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  async handClick(value: string) {
    this.setState({
      loading: true,
    });

    await setTimeout(() => {
      this.setState({
        loading: false,
      });
    }, 1000);
    console.log(value);
  }

  render() {
    return (
      <div>
        <ZButton
          type="primary"
          onClick={() => this.handClick("111")}
          loading={this.state.loading}
        />
        <br />
        <br />
        <div>11</div>
        <Button type="primary"  loading={this.state.loading}>222</Button>
      </div>
    );
  }
}
