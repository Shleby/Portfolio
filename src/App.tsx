import React from "react";
import logo from "./beardSkull.svg";
import sun from "./sun.png";

import "./App.css";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1 style={{ color: "white" }}>
            Hello, I'm{" "}
            <strong style={{ color: "#c4c25f" }}>Shelby Huffman</strong>
          </h1>
          <h1>
            I'm a Software Engineer for{" "}
            <strong style={{ color: "#c4c25f" }}>Boeing</strong>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
