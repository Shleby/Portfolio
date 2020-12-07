import { Paper, makeStyles, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/beardSkull.svg";
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    position: "sticky",
    top: 0,
  },
  paper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "black",
    fontSize: "larger",
    backgroundColor: "rgb(145, 141, 140)",
  },
  tabs: {
    color: "white",
  },
  indicator: {
    backgroundColor: "white",
  },
});

export default function Navbar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} id="navbar">
        <Tabs
          value={value}
          className={classes.tabs}
          classes={{ indicator: classes.indicator }}
          onChange={handleChange}
        >
          <Tab
            label={
              <HashLink to="/#about" smooth>
                About
              </HashLink>
            }
          />

          <Tab
            label={
              <HashLink to="/#projects" smooth>
                Projects
              </HashLink>
            }
          />
          <Tab
            label={
              <HashLink to="/#skills" smooth>
                Skills
              </HashLink>
            }
          />
          <Tab
            label={
              <HashLink to="/#contact" smooth>
                Contact
              </HashLink>
            }
          />
        </Tabs>
      </Paper>
    </div>
  );
}
