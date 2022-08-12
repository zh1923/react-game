import * as React from "react";
import LogicFlow from "@logicflow/core";
import { Menu } from "@logicflow/extension";
import customCircle from "./customCircle";

LogicFlow.use(Menu);

import "@logicflow/core/dist/style/index.css";
import { useEffect, useRef } from "react";

export default function Logic() {
  const refContainer = useRef();
  let logicflow: any;

  useEffect(() => {
    logicflow = new LogicFlow({
      container: refContainer.current!,
      grid: true,
      height:  500,
    });
    logicflow.register(customCircle);
    logicflow.on("node:dnd-add", (data: any) => {
      console.log(data);
    });
    logicflow.render({
      nodes: [
        {
          type: "customCircle",
          x: 100,
          y: 200,
        },
      ],
    });
  }, []);

  function mouseDown(type: string) {
    logicflow.dnd.startDrag({
      type,
      text: `${type}节点`,
      properties: {
        value: "111",
      },
    });
  }

  return (
    <div>
      <div className="logicflow-custom-panel">
        <svg
          t="1642476076136"
          className="icon logicflow-custom-panel-item"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1257"
          width="40"
          height="40"
          data-type="customCircle"
          onMouseDown={() => mouseDown("customCircle")}
        >
          <path
            d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z"
            fill="currentColor"
          ></path>
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
            fill="currentColor"
          ></path>
        </svg>
        <svg
          t="1642476866094"
          className="icon logicflow-custom-panel-item"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="5232"
          width="40"
          height="40"
          data-type="rect"
          onMouseDown={() => mouseDown("rect")}
        >
          <path
            d="M273.9 168.3H739v37.1H273.9zM273.9 819.6H739v37.1H273.9zM165.812 740.898v-465.1h37.1v465.1zM821.11 740.896v-465.1h37.1v465.1z"
            fill="currentColor"
            p-id="5233"
          ></path>
          <path
            d="M184.7 66.2c-66.8 0-121 54.2-121 121s54.2 121 121 121 121-54.2 121-121-54.1-121-121-121z m-0.1 203.5c-45.7 0-82.7-37-82.7-82.7s37-82.7 82.7-82.7 82.7 37 82.7 82.7c0.1 45.7-37 82.7-82.7 82.7zM184.7 717.5c-66.8 0-121 54.2-121 121s54.2 121 121 121 121-54.2 121-121-54.1-121-121-121z m-0.1 203.6c-45.7 0-82.7-37-82.7-82.7s37-82.7 82.7-82.7 82.7 37 82.7 82.7c0.1 45.6-37 82.7-82.7 82.7zM840 717.5c-66.8 0-121 54.2-121 121s54.2 121 121 121 121-54.2 121-121-54.1-121-121-121z m-0.1 203.6c-45.7 0-82.7-37-82.7-82.7s37-82.7 82.7-82.7 82.7 37 82.7 82.7c0.1 45.6-37 82.7-82.7 82.7zM840 66.2c-66.8 0-121 54.2-121 121s54.2 121 121 121 121-54.2 121-121-54.1-121-121-121z m-0.1 203.5c-45.7 0-82.7-37-82.7-82.7s37-82.7 82.7-82.7 82.7 37 82.7 82.7c0.1 45.7-37 82.7-82.7 82.7z"
            fill="currentColor"
            p-id="5234"
          ></path>
        </svg>
      </div>
      <div className="Logic" ref={refContainer}></div>
    </div>
  );
}
