import { Grid, Paper } from "@material-ui/core";
import React from "react";
import drawCouple from "../assets/drawCouple.png";
import cavs from "../assets/cavs.svg";
import thxCouple from "../assets/thxCouple.png";
import hacklahoma from "../assets/hacklahoma.svg";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import Cavaliers from "../assets/cavaliers.svg";
import Crossmen from "../assets/crossmen.png";
import Mandarins from "../assets/mandarins.svg";
import Profile from "../assets/profile.png";
import couple from "../assets/couple.png";
import dciCouple from "../assets/dciCouple.png";
import beanie from "../assets/beanie.png";
import xmas from "../assets/xmasCouple.jpg";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  CarouselProvider,
  DotGroup,
  Image,
  Slide,
  Slider,
} from "pure-react-carousel";

export default function About() {
  return (
    <div style={{ height: "auto", backgroundColor: "#d6d6d6" }}>
      <div id="about" style={{ height: "5vh" }} />

      <h1 style={{ color: "black" }}>
        <h2>About Me</h2>
      </h1>
      <div className="about">
        <Paper
          elevation={11}
          style={{
            backgroundColor: "rgb(44, 43, 39)",
            width: "auto",
            height: "auto",
            padding: 20,
            marginBottom: "10vh",
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Paper
              elevation={24}
              style={{ width: "40%", backgroundColor: "rgb(44, 43, 39)" }}
            >
              <img
                src={Profile}
                className="about-img"
                style={{ width: "100%", height: "inherit" }}
                alt="Drawing of me and Haruka"
              />
            </Paper>
            <Paper
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "60%",
                marginLeft: 20,
                backgroundColor: "rgb(44, 43, 39)",
              }}
              elevation={24}
            >
              <WorkIcon fontSize="large" style={{ color: "white" }} />
              <h1 style={{ color: "white" }}>
                <strong style={{ marginLeft: 10 }}>
                  Software Engineer at Boeing
                </strong>
              </h1>

              <h1 style={{ color: "white" }}>
                <SchoolIcon fontSize="large" style={{ color: "white" }} />
                <div>
                  <strong style={{ color: "#FDF9D8" }}>
                    The University of Oklahoma
                  </strong>
                  <br />
                  Bachelors in Mathematics
                  <br />
                  Bachelors in Computer Science
                  <br />
                </div>
              </h1>

              <ColorLensIcon fontSize="large" style={{ color: "white" }} />
              <div className="about-set about-margin">
                <h1 style={{ color: "white" }}>
                  My hobbies include teaching music,
                  <br />
                  competing in hackathons,
                  <br />
                  and drinking coffee all day.
                  <br />
                </h1>
              </div>
            </Paper>
          </div>
        </Paper>
        <Paper
          elevation={24}
          style={{
            backgroundColor: "rgb(145, 141, 140)",
            width: "70%",
            height: "auto",
            marginBottom: "10vh",
            padding: 20,
          }}
        >
          <CarouselProvider
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            totalSlides={6}
            hasMasterSpinner
            visibleSlides={2}
            step={1}
            isPlaying
            infinite
          >
            <Slider>
              <Slide index={0}>
                <div style={{ padding: 10 }}>
                  <Paper
                    elevation={8}
                    style={{ width: "100%", height: "auto " }}
                  >
                    <Image
                      src={drawCouple}
                      hasMasterSpinner
                      alt="drawing"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Paper>
                </div>
              </Slide>
              <Slide index={1}>
                <div style={{ padding: 10 }}>
                  <Paper
                    elevation={8}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Image
                      src={thxCouple}
                      hasMasterSpinner
                      alt="drawing"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Paper>
                </div>
              </Slide>
              <Slide index={2}>
                <div style={{ padding: 10 }}>
                  <Paper
                    elevation={8}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Image
                      src={couple}
                      hasMasterSpinner
                      alt="drawing"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Paper>
                </div>
              </Slide>
              <Slide index={3}>
                <div style={{ padding: 10 }}>
                  <Paper
                    elevation={8}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Image
                      src={xmas}
                      hasMasterSpinner
                      alt="drawing"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Paper>
                </div>
              </Slide>
              <Slide index={4}>
                <div style={{ padding: 10 }}>
                  <Paper
                    elevation={8}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Image
                      src={dciCouple}
                      hasMasterSpinner
                      alt="drawing"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Paper>
                </div>
              </Slide>
              <Slide index={5}>
                <div style={{ padding: 10 }}>
                  <Paper
                    elevation={8}
                    style={{ width: "100%", height: "auto" }}
                  >
                    <Image
                      src={beanie}
                      hasMasterSpinner
                      alt="drawing"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                      }}
                    />
                  </Paper>
                </div>
              </Slide>
            </Slider>
            <DotGroup />
          </CarouselProvider>
          <div style={{ backgroundColor: "rgb(44, 43, 39)", padding: 5 }}>
            <h1 style={{ color: "white" }}>
              I am very happily married to my wife Haruka.
            </h1>
          </div>
        </Paper>
        <Paper
          elevation={11}
          style={{
            backgroundColor: "rgb(44, 43, 39)",
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
                elevation={24}
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
                className="about-paper-2"
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
            backgroundColor: "rgb(44, 43, 39)",
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
              elevation={24}
            >
              <h2 style={{ color: "white" }} className="about-paper-2">
                <h3>Quick Drum Corps Resume :</h3>
                <div className="about-set about-margin">
                  <img src={Cavaliers} alt="cavs" style={{ width: "10%" }} />
                  <h3 style={{ color: "white" }}>
                    The Cavaliers Drum and Bugle Corps
                    <br /> of Chicago, Illinois
                  </h3>
                </div>
                <div className="about-set about-margin">
                  <img src={Crossmen} alt="crossmen" style={{ width: "10%" }} />
                  <h3 style={{ color: "white" }}>
                    The Crossmen Drum and Bugle Corps
                    <br /> of San Antonio, Texas
                  </h3>
                </div>
                <div className="about-set about-margin">
                  <img
                    src={Mandarins}
                    alt="Mandarins"
                    style={{ width: "10%" }}
                  />
                  <h3 style={{ color: "white" }}>
                    The Mandarins Drum and Bugle Corps
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
