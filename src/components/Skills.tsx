import React from "react";
import { Grid, GridItem } from "@patternfly/react-core";
import StarRateIcon from "@material-ui/icons/StarRate";
import styled from "styled-components";
import { Paper, Typography } from "@material-ui/core";

export default function Skills() {
  return (
    <div
      style={{
        height: "auto",
        backgroundColor: "#d6d6d6",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div id="skills" style={{ paddingBottom: "5vh" }} />
      <Paper
        elevation={24}
        style={{ width: "75%", backgroundColor: "#2c2b27" }}
      >
        <Grid>
          <h1
            style={{
              fontSize: "63px",
              fontWeight: "bolder",
              color: "white",
              marginBottom: "-1vh",
              textAlign: "center",
            }}
          >
            Skills
          </h1>
          <Typography
            variant="subtitle1"
            className="quote"
            style={{
              color: "white",
              fontStyle: "italic",
              marginTop: "3px",
              marginBottom: "3px",
              textAlign: "center",
            }}
          >
            "If you compare yourself with others, you may become vain or bitter,
          </Typography>
          <Typography
            variant="subtitle1"
            className="quote"
            style={{
              color: "white",
              fontStyle: "italic",
              marginTop: "3px",
              marginBottom: "3px",
              textAlign: "center",
            }}
          >
            for always there will be greater and lesser persons than yourself."
          </Typography>{" "}
          <Typography
            variant="subtitle1"
            className="quote"
            style={{
              color: "white",
              fontStyle: "italic",
              marginTop: "3px",
              marginBottom: "3px",
              textAlign: "center",
            }}
          >
            - Max Ehrmann
          </Typography>
          <hr className="style-two" />
          <h1
            style={{
              fontSize: "33px",
              fontWeight: "bolder",
              color: "white",
            }}
          >
            Programming
          </h1>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "30px", textAlign: "left" }}
          >
            {Rating("React", 5)}
            {Rating("TypeScript", 5)}
            {Rating("JavaScript", 5)}
            {Rating("HTML5", 5)}
            {Rating("CSS3", 5)}
            {Rating("Git", 5)}
            {Rating("Java", 5)}
          </GridItem>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "10px", textAlign: "left" }}
          >
            {Rating("Google Cloud Platform", 4)}
            {Rating("C++", 4)}
            {Rating("XML", 4)}
            {Rating("SQL", 4)}
            {Rating("R", 3)}
            {Rating("Kotlin", 3)}
            {Rating("Python", 3)}
          </GridItem>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "30px", textAlign: "left" }}
          >
            {Rating("Windows 10", 5)}
            {Rating("MacOS", 5)}
            {Rating("Jira/BitBucket/Confluence", 5)}
            {Rating("Linux (Ubuntu, Red Hat)", 4)}
            {Rating("Microsoft Suite", 4)}
            {Rating("MongoDB", 4)}
            {Rating("Azure", 4)}
          </GridItem>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "10px", textAlign: "left" }}
          >
            {Rating("FireBase", 3)}
            {Rating("Clearcase Version Control", 3)}
            {Rating("SmartGWT", 3)}
            {Rating("Node.JS", 2)}
            {Rating("C", 2)}
            {Rating("Unity", 2)}
          </GridItem>
          <hr className="style-two" style={{ marginTop: "30px" }} />
          <p
            style={{
              fontSize: "33px",
              fontWeight: "bolder",
              color: "white",
            }}
          >
            Languages
          </p>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "30px", textAlign: "left" }}
          >
            {Rating("English (Native Speaker)", 5)}
            {Rating("Japanese (Survivable/Daily Use)", 3)}
          </GridItem>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "10px", textAlign: "left" }}
          >
            {Rating("Spanish (4 years of classes)", 2)}
            {Rating("French (2 years of classes)", 2)}
          </GridItem>
          <hr className="style-two" style={{ marginTop: "30px" }} />
          <p
            style={{
              fontSize: "33px",
              fontWeight: "bolder",
              color: "white",
            }}
          >
            General Skills
          </p>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "30px", textAlign: "left" }}
          >
            {Rating("Leadership", 5)}
            {Rating("Discipline", 5)}
            {Rating("Percussion", 5)}
            {Rating("Rhythm", 5)}
            {Rating("Risk/Safety Mitigation", 5)}
            {Rating("Teaching", 5)}
          </GridItem>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "10px", textAlign: "left" }}
          >
            {Rating("Event Management", 4)}
            {Rating("Graphic Design", 4)}
            {Rating("Music Theory", 4)}
            {Rating("Guitar", 3)}
            {Rating("Ping Pong", 1)}
            {Rating("Jokes", 1)}
          </GridItem>
          <hr className="style-two" style={{ marginTop: "30px" }} />
          <p
            style={{
              fontSize: "33px",
              fontWeight: "bolder",
              color: "white",
            }}
          >
            Tools
          </p>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: "30px", textAlign: "left" }}
          >
            {Rating("VS Code", 5)}
            {Rating("Eclipse", 5)}
            {Rating("Microsoft Suite", 5)}
            {Rating("Notepad++", 5)}
            {Rating("Postman", 5)}
            {Rating("Rstudio", 4)}
          </GridItem>
          <GridItem
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{
              marginBottom: "30px",
              marginLeft: "10px",
              textAlign: "left",
            }}
          >
            {Rating("Git Bash", 4)}
            {Rating("Sibelius", 4)}
            {Rating("VectorNator", 3)}
            {Rating("Figma", 3)}
            {Rating("Balsamiq", 3)}
            {Rating("Adobe XD", 3)}
          </GridItem>
        </Grid>
      </Paper>
    </div>
  );
}
const Wrapper = styled.div`
  &:hover .star {
    margin-left: 1px;
  }
  &:hover .star-wrapper {
    background-color: #d6d6d628;
  }
`;

function Rating(skill: String, rating: Number) {
  if (rating === 5) {
    return (
      <>
        <Wrapper>
          <div
            className="star-wrapper"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "95%",
              color: "white",
              textAlign: "left",
            }}
          >
            <div style={{ width: "50%" }}>
              <Typography
                variant="subtitle1"
                style={{ marginTop: "0px", marginBottom: "0px" }}
              >
                {skill}
              </Typography>
            </div>

            <div>
              <StarRateIcon className="star" />
              <StarRateIcon className="star" />
              <StarRateIcon className="star" />
              <StarRateIcon className="star" />
              <StarRateIcon className="star" />
            </div>
          </div>
        </Wrapper>
      </>
    );
  } else if (rating === 4) {
    return (
      <Wrapper>
        <div
          className="star-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            color: "white",
            textAlign: "left",
          }}
        >
          <div style={{ width: "50%" }}>
            <Typography
              variant="subtitle1"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              {skill}
            </Typography>
          </div>
          <div>
            <StarRateIcon className="star" />
            <StarRateIcon className="star" />
            <StarRateIcon className="star" />
            <StarRateIcon className="star" />

            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
          </div>
        </div>
      </Wrapper>
    );
  } else if (rating === 3) {
    return (
      <Wrapper>
        <div
          className="star-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            color: "white",
            textAlign: "left",
          }}
        >
          <div style={{ width: "50%" }}>
            <Typography
              variant="subtitle1"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              {skill}
            </Typography>
          </div>
          <div className="star">
            <StarRateIcon className="star" />
            <StarRateIcon className="star" />
            <StarRateIcon className="star" />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
          </div>
        </div>
      </Wrapper>
    );
  } else if (rating === 2) {
    return (
      <Wrapper>
        <div
          className="star-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            color: "white",
            textAlign: "left",
          }}
        >
          <div style={{ width: "50%" }}>
            <Typography
              variant="subtitle1"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              {skill}
            </Typography>
          </div>
          <div className="star">
            <StarRateIcon className="star" />
            <StarRateIcon className="star" />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
          </div>
        </div>
      </Wrapper>
    );
  } else if (rating === 1) {
    return (
      <Wrapper>
        <div
          className="star-wrapper"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "95%",
            color: "white",
            textAlign: "left",
          }}
        >
          <div style={{ width: "50%" }}>
            <Typography
              variant="subtitle1"
              style={{ marginTop: "0px", marginBottom: "0px" }}
            >
              {skill}
            </Typography>
          </div>
          <div className="star">
            <StarRateIcon className="star" />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
            <StarRateIcon className="star" style={{ color: "#d6d6d6" }} />
          </div>
        </div>
      </Wrapper>
    );
  }
}
