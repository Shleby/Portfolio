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
        <h1 style={{ color: "white" }}>Projects</h1>
        <h1 style={{ color: "white" }}>Projects</h1>
        <h1 style={{ color: "white" }}>Projects</h1>
        <h1 style={{ color: "white" }}>Projects</h1>
      </div>
      <div style={{ backgroundColor: "#d6d6d6" }}>
        <img src={WaveReverse} alt="" style={{ marginTop: "-2.1vh" }} />
      </div>
    </div>
  );
}
