import { Paper, makeStyles, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { HashLink } from "react-router-hash-link";
const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: 0,
    zIndex: 100000,
    width: "100%",
  },
  paper: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    color: "black",
    fontSize: "larger",
    backgroundColor: "rgb(44, 43, 39)",
  },
  tabs: {
    color: "white",
  },
  indicator: {
    backgroundColor: "white",
  },
  nav: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
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
      <Paper className={classes.paper} elevation={11}>
        <nav className={classes.nav} id="navbar">
          <HashLink to="/#about" smooth className="hash-link">
            <h3>About</h3>
          </HashLink>
          <HashLink to="/#projects" smooth className="hash-link">
            <h3>Projects</h3>
          </HashLink>
          <HashLink to="/#skills" smooth className="hash-link">
            <h3>Skills</h3>
          </HashLink>
          <HashLink to="/#contact" smooth className="hash-link">
            <h3>Contact</h3>
          </HashLink>
        </nav>
      </Paper>
    </div>
  );
}
