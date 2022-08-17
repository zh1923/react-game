import React from "react";
import "./index.less";
import { getImage } from "@/assets";
import { Button } from "antd";

interface Table {
  sort: number;
  value?: any;
  label?: string;
}

interface State {
  stepX: number;
  stepY: number;
  tableData: Table[][];
  fruit: string[];
  randomList: number[];
  selected: [number, number] | [];
  stepList: any[];

  oldSelected: Partial<{
    x0: number;
    x1: number;
    y0: number;
    y1: number;
    value: any;
  }>;
}

export default class Main extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      stepX: 15,
      stepY: 10,
      tableData: [],
      fruit: [
        "葡萄",
        "橘子",
        "香蕉",
        "苹果",
        "桃子",
        "石榴",
        "柚子",
        "甘蔗",
        "芒果",
        "榴莲",
        "草莓",
        "菠萝",
      ],
      randomList: [],
      selected: [],
      stepList: [],
      oldSelected: {},
    };
  }

  componentDidMount() {
    this.initRandom();
  }

  initRandom() {
    let step = (this.state.stepY * this.state.stepX) / 2;

    let randomList = [];

    for (let i = 0; i < step; i++) {
      var random = Math.floor(Math.random() * 22 * 10000);
      var number = random % 23;
      randomList.push(number);
      randomList.push(number);
    }

    for (var i = 0; i < randomList.length; i++) {
      var random = Math.floor(Math.random() * 15 * 10000);
      var number = random % 150;

      var temp;
      temp = randomList[i];
      randomList[i] = randomList[number];
      randomList[number] = temp;
    }

    this.setState(
      {
        randomList: randomList,
      },
      () => {
        this.assignment();
      }
    );
  }

  assignment() {
    let list = [];
    for (let i = 0; i < this.state.stepY + 2; i++) {
      let data = [];
      for (let j = 0; j < this.state.stepX + 2; j++) {
        if (
          i === 0 ||
          i === this.state.stepY + 1 ||
          j === 0 ||
          j === this.state.stepX + 1
        ) {
          data.push({
            sort: j,
            value: undefined,
            label: "",
          });
        } else {
          let index = this.state.stepX * (i - 1);

          let value = this.state.randomList[index + j - 1];
          data.push({
            sort: j,
            value: value,
            label: `${i}-${j}`,
          });
        }
      }
      list.push(data);
    }
    this.setState({
      tableData: list,
    });
  }

  handClick(trIndex: number, tdIndex: number) {
    if (
      this.state.selected.length > 1 &&
      this.state.tableData[trIndex][tdIndex].value ===
        this.state.tableData[this.state.selected[0]!][this.state.selected[1]!]
          .value &&
      (trIndex !== this.state.selected[0] || tdIndex !== this.state.selected[1])
    ) {
      if (this.handEliminate(trIndex, tdIndex)) {
        this.setState({
          oldSelected: {
            x0: this.state.selected[1],
            y0: this.state.selected[0],
            x1: tdIndex,
            y1: trIndex,
            value:
              this.state.tableData[this.state.selected[0]!][
                this.state.selected[1]!
              ].value,
          },
        });

        let tableData;
        tableData = this.state.tableData;
        tableData[trIndex][tdIndex].value = undefined;
        tableData[this.state.selected[0]!][this.state.selected[1]!].value =
          undefined;

        this.setState({
          selected: [],
          tableData: tableData,
        });
      } else {
        this.setState({
          selected: [trIndex, tdIndex],
        });
      }
    } else {
      this.setState({
        selected: [trIndex, tdIndex],
      });
    }
  }

  /** 确定清除指定 两条数据 判断路线 */
  handEliminate(trIndex: number, tdIndex: number) {
    if (
      this.Horizontal(
        trIndex,
        tdIndex,
        this.state.selected[0]!,
        this.state.selected[1]!
      )
    ) {
      // 水平
      return true;
    } else if (
      this.Vertical(
        trIndex,
        tdIndex,
        this.state.selected[0]!,
        this.state.selected[1]!
      )
    ) {
      // 垂直
      return true;
    } else if (
      this.OnePoint(
        trIndex,
        tdIndex,
        this.state.selected[0]!,
        this.state.selected[1]!
      )
    ) {
      // 一条拐点
      return true;
    } else if (
      this.TwoPointPath(
        trIndex,
        tdIndex,
        this.state.selected[0]!,
        this.state.selected[1]!
      )
    ) {
      // 两条拐点
      return true;
    }
  }

  Horizontal(trIndex: number, tdIndex: number, y0: number, x0: number) {
    let result = true;
    if (trIndex === y0) {
      let start = x0 > tdIndex ? x0 - 1 : x0 + 1;

      let step = x0 - tdIndex;

      if (Math.abs(step) - 1 <= 0) {
        return true;
      }

      for (let i = 0; i < Math.abs(step) - 1; i++) {
        let index = x0 > tdIndex ? -i : i;
        if (this.state.tableData[trIndex][index + start]?.value !== undefined) {
          result = false;
          return false;
        }
        // setTimeout(() => {
        //   console.log(result);
        // });
      }
    } else {
      result = false;
    }
    return result;
  }

  Vertical(trIndex: number, tdIndex: number, y0: number, x0: number) {
    let result = true;
    if (tdIndex === x0) {
      let start = y0 > trIndex ? y0 - 1 : y0 + 1;

      let step = y0 - trIndex;

      if (Math.abs(step) - 1 <= 0) {
        return true;
      }

      for (let i = 0; i < Math.abs(step) - 1; i++) {
        let index = y0 > trIndex ? -i : i;
        if (this.state.tableData[index + start][tdIndex]?.value !== undefined) {
          result = false;
          return false;
        }
        // setTimeout(() => {
        //   console.log(result);
        // });
      }
    } else {
      result = false;
    }
    return result;
  }

  OnePoint(trIndex: number, tdIndex: number, y0: number, x0: number) {
    if (
      this.state.tableData[y0][tdIndex].value &&
      this.state.tableData[trIndex][x0].value
    ) {
      return false;
    }

    let result = false;

    if (this.state.tableData[y0][tdIndex].value === undefined) {
      result =
        this.Horizontal(y0, x0, y0, tdIndex) &&
        this.Vertical(y0, tdIndex, trIndex, tdIndex);

      if (result) {
        return result;
      }
    }
    if (this.state.tableData[trIndex][x0].value === undefined) {
      result =
        this.Vertical(y0, x0, trIndex, x0) &&
        this.Horizontal(trIndex, x0, trIndex, tdIndex);

      if (result) {
        return result;
      }
    }

    return result;

    // console.log(this.Horizontal(y0, x0, y0, tdIndex));
    // console.log(this.Vertical(y0, tdIndex, trIndex, tdIndex));
    // console.log(
    //   this.Horizontal(y0, x0, y0, tdIndex) &&
    //     this.Vertical(y0, tdIndex, trIndex, tdIndex)
    // );

    // console.log(this.Vertical(y0, x0, trIndex, x0));
    // console.log(this.Horizontal(trIndex, x0, trIndex, tdIndex));
    // console.log(
    //   this.Vertical(y0, x0, trIndex, x0) &&
    //     this.Horizontal(trIndex, x0, trIndex, tdIndex)
    // );
    // let result =
    //   (this.Horizontal(y0, x0, y0, tdIndex) &&
    //     this.Vertical(y0, tdIndex, trIndex, tdIndex)) ||
    //   (this.Vertical(y0, x0, trIndex, x0) &&
    //     this.Horizontal(trIndex, x0, trIndex, tdIndex));
    // return result;
  }

  TwoPointPath(trIndex: number, tdIndex: number, y0: number, x0: number) {
    let flag = false;
    for (let i = 0; i < this.state.stepY + 2; i++) {
      for (let j = 0; j < this.state.stepX + 2; j++) {
        if (
          this.state.tableData[i][j].value ||
          (i !== trIndex && i !== y0 && j !== tdIndex && j !== x0)
        ) {
          continue;
        }
        flag =
          ((y0 !== i && x0 !== j) || (trIndex !== i && tdIndex !== j)
            ? this.OnePoint(i, j, y0, x0)
            : false) &&
          (this.Vertical(trIndex, tdIndex, i, j) ||
            this.Horizontal(trIndex, tdIndex, i, j));
        // var flag2 =
        //   this.OnePoint(i, j, trIndex, tdIndex) &&
        //   (this.Vertical(y0, x0, i, j) || this.Horizontal(y0, x0, i, j));
        // flag = flag1 || flag2;

        if (flag) {
          return true;
        }
      }
    }
    return flag;
  }

  // TwoPointPath(trIndex: number, tdIndex: number, y0: number, x0: number) {
  //   let flag = false;
  //   for (let i = 0; i < this.state.stepY; i++) {
  //     for (let j = 0; j < this.state.stepX; j++) {
  //       if (!this.state.tableData[i][j]) {
  //         continue;
  //       }
  //       var flag1 =
  //         this.OnePoint(y0, x0, i, j) &&
  //         (this.Vertical(trIndex, tdIndex, j, j) || this.Horizontal(trIndex, tdIndex, i, j));
  //       var flag2 =
  //       this.OnePoint(trIndex, tdIndex, i, j) &&
  //         (this.Vertical(y0, x0, i, j) || this.Horizontal(x0, y0, i, j));
  //       flag = flag1 || flag2;
  //     }
  //   }
  //   return flag;
  // }

  backOff() {
    let tableData = this.state.tableData;

    tableData[this.state.oldSelected.y0!][this.state.oldSelected.x0!].value =
      this.state.oldSelected.value;
    tableData[this.state.oldSelected.y1!][this.state.oldSelected.x1!].value =
      this.state.oldSelected.value;

    this.setState({
      tableData,
      oldSelected: {},
    });
  }

  render() {
    return (
      <div className="content">
        <Button
          className="back-off"
          onClick={() => this.backOff()}
          disabled={!this.state.oldSelected.x0}
        >
          回退
        </Button>
        <table>
          <tbody>
            {this.state.tableData.map((tr, trIndex) => {
              return (
                <tr key={trIndex}>
                  {tr?.map((td, tdIndex) => {
                    return (
                      <td
                        key={tdIndex}
                        className={`${td.value !== undefined ? "value" : ""} ${
                          this.state.selected.length > 1 &&
                          this.state.selected[0] === trIndex &&
                          this.state.selected[1] === tdIndex
                            ? "selected"
                            : ""
                        } ${this.state.stepList.includes(td.value) ?? ""}`}
                        onClick={() =>
                          td.value !== undefined
                            ? this.handClick(trIndex, tdIndex)
                            : ""
                        }
                      >
                        {td.value !== undefined ? (
                          <img src={getImage(td.value)} />
                        ) : (
                          ""
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
