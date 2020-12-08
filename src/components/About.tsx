import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import drawCouple from "../assets/drawCouple.png";
import cavs from "../assets/cavs.svg";
import thxCouple from "../assets/thxCouple.png";
import hacklahoma from "../assets/hacklahoma.svg";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import FlightIcon from "@material-ui/icons/Flight";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import BusinessIcon from "@material-ui/icons/Business";
import Cavaliers from "../assets/cavaliers.svg";
import Crossmen from "../assets/crossmen.png";
import Mandarins from "../assets/mandarins.svg";
import Profile from "../assets/profile.png";
import couple from "../assets/couple.png";
import dciCouple from "../assets/dciCouple.png";
import beanie from "../assets/beanie.png";
import xmas from "../assets/xmasCouple.jpg";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import PowerIcon from "@material-ui/icons/Power";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import CloudIcon from "@material-ui/icons/CloudDownload";
import TelegramIcon from "@material-ui/icons/Telegram";
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
          <div className="row">
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
              className="about-paper"
              style={{ backgroundColor: "rgb(44,43,39)" }}
              elevation={24}
            >
              <Grid container>
                <Grid item xs={6} className="about-grid">
                  <Typography
                    variant="h4"
                    component="h6"
                    className="about-type"
                  >
                    <SchoolIcon style={{ marginRight: 10 }} />
                    Education
                    <hr style={{ width: "60%" }} />
                  </Typography>
                  <Typography variant="subtitle1" className="about-type-phone">
                    Education
                    <hr style={{ width: "60%" }} />
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h6"
                    className="color-yellow"
                  >
                    The University of Oklahoma
                  </Typography>
                  <Typography variant="body1" className="color-yellow-phone">
                    The University of Oklahoma
                  </Typography>
                  <Typography variant="subtitle1" className="cs-type">
                    Bachelors of Science in Computer Science
                  </Typography>
                  <Typography variant="body2" className="cs-type-phone">
                    Computer Science
                  </Typography>
                  <Typography variant="subtitle1" className="math-type">
                    Bachelors of Arts in Mathematics
                  </Typography>
                  <Typography variant="body2" className="math-type-phone">
                    Mathematics
                  </Typography>
                  <Typography
                    variant="h4"
                    component="h6"
                    className="about-type"
                  >
                    <BusinessIcon style={{ marginRight: 10 }} />
                    Ogranizations
                    <hr style={{ width: "60%" }} />
                  </Typography>
                  <Typography variant="subtitle1" className="about-type-phone">
                    Ogranizations
                    <hr style={{ width: "60%" }} />
                  </Typography>
                  <Typography variant="h6" component="h6" className="cs-type">
                    <TelegramIcon style={{ marginRight: 10 }} />
                    Executive Director for{" "}
                    <text className="color-yellow">Hacklahoma</text>
                  </Typography>
                  <Typography variant="body2" className="cs-type-phone">
                    <TelegramIcon
                      style={{ paddingLeft: 10, paddingRight: 10 }}
                    />

                    <text className="color-yellow-phone">Hacklahoma</text>
                  </Typography>
                  <Typography variant="h6" className="cs-type">
                    <CloudIcon style={{ marginRight: 10 }} />
                    Web master for <text className="color-yellow">SACM</text>
                  </Typography>
                  <Typography variant="body2" className="cs-type-phone">
                    <CloudIcon style={{ paddingLeft: 10, paddingRight: 10 }} />

                    <text className="color-yellow-phone">SACM</text>
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 10,
                  }}
                >
                  <Typography
                    variant="h4"
                    component="h6"
                    className="about-type"
                  >
                    <WorkIcon style={{ marginRight: 10 }} />
                    Employement
                    <hr style={{ width: "60%" }} />
                  </Typography>
                  <Typography variant="subtitle1" className="about-type-phone">
                    Employement
                    <hr style={{ width: "60%" }} />
                  </Typography>
                  <Typography variant="h6" component="h6" className="cs-type">
                    <FlightIcon style={{ marginRight: 10 }} />
                    Software Engineer at{" "}
                    <text className="color-yellow">Boeing</text>
                  </Typography>
                  <Typography variant="body2" className="boeing-type-phone">
                    <FlightIcon style={{ marginRight: 10 }} />
                    <text className="color-yellow-phone">Boeing</text>
                  </Typography>
                  <Typography variant="h6" component="h6" className="math-type">
                    <LaptopMacIcon style={{ marginRight: 10 }} />
                    Freelance{" "}
                    <text className="color-yellow">Web Developer</text>
                  </Typography>

                  <Typography
                    variant="h4"
                    component="h6"
                    className="about-type"
                  >
                    <WorkIcon style={{ marginRight: 10 }} />
                    Past Positions
                    <hr style={{ width: "60%" }} />
                  </Typography>
                  <Typography variant="subtitle1" className="about-type-phone">
                    Past Positions
                    <hr style={{ width: "60%" }} />
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignContent: "center",
                    }}
                  >
                    <Typography variant="h6" component="h6" className="cs-type">
                      <PowerIcon style={{ marginRight: 10 }} />
                      Software Development Intern at{" "}
                      <text className="color-yellow">Power Costs, Inc</text>
                    </Typography>
                    <Typography variant="body2" className="cs-type-phone">
                      <PowerIcon style={{ marginRight: 10 }} />

                      <text className="color-yellow-phone">
                        Power Costs, Inc
                      </text>
                    </Typography>
                    <Typography variant="h6" component="h6" className="cs-type">
                      <InvertColorsIcon style={{ marginRight: 10 }} />
                      Software Engineering Intern at{" "}
                      <text className="color-yellow">Oseberg</text>
                    </Typography>{" "}
                    <Typography variant="body2" className="cs-type-phone">
                      <InvertColorsIcon style={{ marginRight: 10 }} />

                      <text className="color-yellow-phone">Oseberg</text>
                    </Typography>
                    <Typography variant="h6" component="h6" className="cs-type">
                      <MusicNoteIcon style={{ marginRight: 10 }} />
                      Percussion Instructor at{" "}
                      <text className="color-yellow">
                        Southmoore High School
                      </text>
                    </Typography>
                    <Typography variant="body2" className="cs-type-phone">
                      <MusicNoteIcon style={{ marginRight: 10 }} />
                      <text className="color-yellow-phone">
                        Southmoore High School
                      </text>
                    </Typography>
                  </div>
                </Grid>
              </Grid>
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
              I am happily married to my wife Haruka.
            </h1>
          </div>
        </Paper>
      </div>
    </div>
  );
}
