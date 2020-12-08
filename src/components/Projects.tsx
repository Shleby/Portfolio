import { makeStyles, Paper, Tab, Tabs } from "@material-ui/core";
import React from "react";
import Wave from "../assets/wave.svg";
import WaveReverse from "../assets/waveReverse.svg";

export default function Projects() {
  return (
    <div style={{ height: "auto" }}>
      <div style={{ backgroundColor: "#d6d6d6" }}>
        <img src={Wave} alt="" />
      </div>
      <div style={{ backgroundColor: "#2c2b27", marginTop: "-0.5vh" }}>
        <div id="projects" style={{ height: "5vh" }} />
        <Paper style={{ width: "75%", height: "auto" }} elevation={15}>
          <h1>hey</h1>
        </Paper>
      </div>
      <div style={{ backgroundColor: "#d6d6d6" }}>
        <img src={WaveReverse} alt="" style={{ marginTop: "-2.1vh" }} />
      </div>
    </div>
  );
}
