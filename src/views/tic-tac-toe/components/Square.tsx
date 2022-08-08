import React from "react";
import "./index.less";

interface PropsType {
  value: number;

  onClick: () => void;
}

class Square extends React.Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }


  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
