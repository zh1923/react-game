import React from "react";

export default class Main extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      tableData: [
        [
          {
            label: "111",
            value: "0-1",
            url: "111",
          },
          {
            label: "111",
            value: "0-1",
            url: "111",
          },
          {
            label: "111",
            value: "0-1",
            url: "111",
          },
          {
            label: "111",
            value: "0-1",
            url: "111",
          },
        ],
        [
            {
              label: "111",
              value: "1-1",
              url: "111",
            },
            {
              label: "111",
              value: "0-1",
              url: "111",
            },
            {
              label: "111",
              value: "0-1",
              url: "111",
            },
            {
              label: "111",
              value: "0-1",
              url: "111",
            },
          ],
      ],
    };
  }

  render() {
    return <table></table>;
  }
}
