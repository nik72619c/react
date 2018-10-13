import React from "react";
import ReactDOM from "react-dom";
import { Toggle } from "./toggle";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Toggle
        render={object => (
          <div>
            <p
              style={{ display: object.isShow ? "block" : "none" }}
              ref="paragraph"
            >
              show me
            </p>
            <button onClick={object.handler}>toggle view</button>
          </div>
        )}
      />

      <Toggle
        render={object => (
          <div>
            <p
              style={{ display: object.isShow ? "block" : "none" }}
              ref="paragraph"
            >
              this is a nav
            </p>
            <button onClick={object.handler}>toggle view</button>
          </div>
        )}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
