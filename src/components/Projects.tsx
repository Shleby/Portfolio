import {
  Box,
  createStyles,
  makeStyles,
  Paper,
  Tab,
  Tabs,
  Theme,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import Wave from "../assets/wave.svg";
import WaveReverse from "../assets/waveReverse.svg";
import ProjectItem from "./ProjectItem";
import nextSteps from "../assets/next-steps.png";
import clever from "../assets/clevercitizen.png";
import cers from "../assets/cers.png";
import encryption from "../assets/encryption.jpg";
import hla from "../assets/hla_site.png";

export default function Projects() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: React.SetStateAction<number>) => {
    setValue(newValue);
  };

  const StyledTab = withStyles((theme: Theme) =>
    createStyles({
      root: {
        textTransform: "none",
        color: "#000",
        fontFamily: "Montserrat, sans-serif",
        fontWeight: "bold",
        fontSize: "larger",
        marginRight: theme.spacing(1),
        "&:focus": {
          opacity: 1,
        },
      },
    })
  )((props: StyledTabProps) => <Tab disableRipple {...props} />);

  return (
    <div style={{ height: "auto" }}>
      <div style={{ backgroundColor: "#d6d6d6" }}>
        <img src={Wave} alt="" />
      </div>
      <div
        style={{
          backgroundColor: "#2c2b27",
          marginTop: "-0.5vh",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div id="projects" style={{ marginBottom: "5vh" }} />
        <div
          id="projects"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
          className="height-animate"
        />
        <Paper
          style={{
            width: "90%",
            height: "auto",
            marginTop: "10vh",
          }}
          elevation={15}
        >
          <div className={classes.root}>
            <div className={classes.demo2} style={{ marginTop: "1vh" }}>
              <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="styled tabs example"
              >
                <StyledTab label="All Projects" {...a11yProps(0)} />
                <StyledTab label="React w/ TypeScript" />
                <StyledTab label="Java" />
                <StyledTab label="MongoDB" />
                <StyledTab label="Azure" />
                <StyledTab label="Node.JS" />
              </StyledTabs>
              <Typography className={classes.padding} />
            </div>
            <TabPanel value={value} index={0}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <ProjectItem
                    name={"Clever Citizen"}
                    url={clever}
                    alt="Clever Citizen"
                  />
                  <ProjectItem
                    name={"Hard Luck Automotive"}
                    url={hla}
                    alt="Hard Luck Auto"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <ProjectItem
                    name={"Next Steps"}
                    hackathon
                    url={nextSteps}
                    alt="Next Steps"
                  />
                  <ProjectItem name={"CERS"} url={cers} alt="CERS" hackathon />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <ProjectItem
                    name={"Crypto Analysis"}
                    url={encryption}
                    alt="Encryption"
                  />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <ProjectItem
                    name={"Clever Citizen"}
                    url={clever}
                    alt="Clever Citizen"
                  />
                  <ProjectItem
                    name={"Hard Luck Automotive"}
                    url={hla}
                    alt="Hard Luck Auto"
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  <ProjectItem
                    name={"Next Steps"}
                    hackathon
                    url={nextSteps}
                    alt="Next Steps"
                  />
                  <ProjectItem name={"CERS"} url={cers} alt="CERS" hackathon />
                </div>
              </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignContent: "center",
                  justifyContent: "center",
                }}
              >
                <ProjectItem
                  name={"Crypto Analysis"}
                  url={encryption}
                  alt="Encryption"
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <ProjectItem name={"CERS"} url={cers} alt="CERS" hackathon />
                <ProjectItem
                  name={"Next Steps"}
                  hackathon
                  url={nextSteps}
                  alt="Next Steps"
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={4}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <ProjectItem name={"CERS"} url={cers} alt="CERS" hackathon />
              </div>
            </TabPanel>
            <TabPanel value={value} index={5}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <ProjectItem
                  name={"Clever Citizen"}
                  url={clever}
                  alt="Clever Citizen"
                />
              </div>
            </TabPanel>
          </div>
        </Paper>
      </div>
      <div style={{ backgroundColor: "#d6d6d6" }}>
        <img src={WaveReverse} alt="" style={{ marginTop: "-2.1vh" }} />
      </div>
    </div>
  );
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 40,
      width: "100%",
      backgroundColor: "#c4c25f",
    },
  },
})((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />
));

interface StyledTabProps {
  label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  demo2: {
    backgroundColor: "#ffffff",
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
}));
