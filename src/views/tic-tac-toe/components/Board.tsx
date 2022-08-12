import React from "react";
import Square from "./Square";
import { Button } from "antd";

class Board extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      currentStep: "X",
    };
  }

  handleClick(i: number) {
    const squares = this.state.squares.slice();
    if (!squares[i] && !this.calculateWinner(squares)) {
      this.setState({
        currentStep: this.state.currentStep === "X" ? "O" : "X",
      });
      squares[i] = this.state.currentStep;
      this.setState({ squares: squares });
    }
  }

  calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  renderSquare(i: number) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  reset() {
    this.setState({
      squares: Array(9).fill(null),
      currentStep: "X",
    });
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (!winner) {
      status = "轮到: " + this.state.currentStep;
    }

    return !winner ? (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    ) : (
      <div className="winner">
        <p>胜利：{winner}</p>
        <Button onClick={() => this.reset()}>重新开始</Button>
      </div>
    );
  }
}

export default Board;
