import * as React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Expenses from "@/views/tic-tac-toe";
import Invoices from "@/views/invoices";
import Invoice from "@/views/invoices/invoice";
import EliminateHappy from "@/views/eliminate-happy";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="tic-tac-toe" element={<Expenses />} />
        <Route path="eliminate-happy" element={<EliminateHappy />} />
        {/* {route.map((val) => {
          return (
            <Route
              key={val.key}
              path={val.path}
              element={val.element}
            ></Route>
            {val.children?.map((item) => {
                return (
                  <Route
                    key={item.key}
                    path={item.path}
                    component={item.element}
                  ></Route>
                );
              })} 
           </Route>
          );
        })} */}
        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </HashRouter>,
  rootElement
);
