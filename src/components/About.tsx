import { Paper } from "@material-ui/core";
import React from "react";
import drawCouple from "../assets/drawCouple.svg";
import profile from "../assets/profile.svg";
import cavs from "../assets/cavs.svg";
import thxCouple from "../assets/thxCouple.svg";
import hla from "../assets/hla.svg";
import hacklahoma from "../assets/hacklahoma.svg";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import Cavaliers from "../assets/cavaliers.svg";
import Crossmen from "../assets/crossmen.png";
import Mandarins from "../assets/mandarins.svg";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

export default function About() {
  return (
    <div style={{ height: "auto" }}>
      <div id="about" style={{ height: "5vh" }} />
      <h1 style={{ color: "white" }}>About Me</h1>
      <div className="about">
        <Paper
          elevation={11}
          style={{
            backgroundColor: "transparent",
            width: "75%",
            height: "auto",
            padding: 20,
            marginBottom: "10vh",
          }}
        >
          <div className="about-set">
            <img
              src={profile}
              style={{ width: "40%", margin: 20 }}
              alt="Drawing of me and Haruka"
            />

            <Paper
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
                height: "70%",
                backgroundColor: "rgb(44, 43, 39)",
                marginRight: 40,
                marginLeft: 40,
              }}
            >
              <h2 style={{ color: "white" }}>
                <div className="about-set" style={{ margin: 20 }}>
                  <WorkIcon fontSize="large" style={{ marginRight: 10 }} />
                  <h3 style={{ color: "white" }}>
                    I am a Software Engineer at Boeing.
                    <br /> I work on the AEW&C program in Oklahoma City
                  </h3>
                </div>
                <div className="about-set" style={{ margin: 20 }}>
                  <SchoolIcon fontSize="large" style={{ marginRight: 10 }} />
                  <h3 style={{ color: "white" }}>
                    I have two bachelors degrees, one in Mathematics and one in
                    Computer Science from The University of Oklahoma.
                  </h3>
                </div>
                <div className="about-set" style={{ margin: 20 }}>
                  <ColorLensIcon fontSize="large" style={{ marginRight: 10 }} />
                  <h3 style={{ color: "white" }}>
                    My hobbies include teaching music, working on new projects,
                    and enjoying life with my wife.
                  </h3>
                </div>
              </h2>
            </Paper>
          </div>
        </Paper>
        <Paper
          elevation={11}
          style={{
            backgroundColor: "rgb(145, 141, 140)",
            width: "70%",
            marginBottom: "10vh",
          }}
        >
          <div className="about-set">
            <img
              src={thxCouple}
              style={{ width: "20%", margin: 20 }}
              alt="Thanksgiving 2020 W/ Haruka"
            />
            <img
              src={drawCouple}
              style={{ width: "20%", margin: 20 }}
              alt="Drawing of me and Haruka"
            />
          </div>
          <div style={{ backgroundColor: "rgb(44, 43, 39)", padding: 5 }}>
            <h1 style={{ color: "white" }}>
              I am very happily married to my wife Haruka.
            </h1>
          </div>
        </Paper>
        <Paper
          elevation={11}
          style={{
            backgroundColor: "transparent",
            width: "70%",
            padding: 20,
            marginBottom: "10vh",
          }}
        >
          <div className="about-set">
            <img
              src={hacklahoma}
              style={{ width: "20%", margin: 20 }}
              alt="Drawing of me and Haruka"
            />
            <div className="about" style={{ color: "white" }}>
              <h1>Organizations I'm involved with: </h1>
              <Paper
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: "70%",
                  backgroundColor: "rgb(44, 43, 39)",
                  marginRight: 40,
                  marginLeft: 40,
                }}
              >
                <h2 style={{ color: "white" }}>
                  <h3>I am an Executive Director at Hacklahoma.</h3>

                  <h3 style={{ color: "white" }}>
                    I am the Web Master for the Student Association of Computing
                    Machinery
                  </h3>
                </h2>
              </Paper>
            </div>
          </div>
        </Paper>
        <Paper
          elevation={11}
          style={{
            backgroundColor: "rgb(145, 141, 140)",
            width: "70%",
            padding: 20,
          }}
        >
          <div className="about-set">
            <img
              src={cavs}
              style={{ width: "20%", margin: 20 }}
              alt="Thanksgiving 2020 W/ Haruka"
            />
            <Paper
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "60%",
                height: "70%",
                backgroundColor: "rgb(44, 43, 39)",
                marginRight: 40,
                marginLeft: 40,
              }}
            >
              <h2 style={{ color: "white" }}>
                <h3>I was blessed to march at :</h3>
                <div className="about-set" style={{ margin: 20 }}>
                  <img src={Cavaliers} alt="cavs" style={{ width: "10%" }} />
                  <h3 style={{ color: "white" }}>
                    The Cavaliers Drum and Bugle Corps
                    <br /> of Chicago, Illinois
                  </h3>
                </div>
                <div className="about-set" style={{ margin: 20 }}>
                  <img src={Crossmen} alt="crossmen" style={{ width: "10%" }} />
                  <h3 style={{ color: "white" }}>
                    The Crossmen Drum and Bugle Corps
                    <br /> of San Antonio, Texas
                  </h3>
                </div>
                <div className="about-set" style={{ margin: 20 }}>
                  <img
                    src={Mandarins}
                    alt="Mandarins"
                    style={{ width: "10%" }}
                  />
                  <h3 style={{ color: "white" }}>
                    Mandarins Drum and Bugle Corps
                    <br /> of Sacramento, California
                  </h3>
                </div>
              </h2>
            </Paper>
          </div>
        </Paper>
      </div>
    </div>
  );
}
