import * as React from "react";
import Board from "./components/Board";

export default function Expenses() {
  return (
    <main
      style={{
        padding: "1rem 0",
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Board />
    </main>
  );
}
