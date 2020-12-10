import {
  Button,
  createStyles,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import React, { PropsWithChildren } from "react";

interface IProjectProps {
  name: string;
  url: any;
  alt: string;
  hackathon?: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      backgroundColor: "#2c2b27",
      color: "white",
    },
  })
);

export default function ProjectItem(props: PropsWithChildren<IProjectProps>) {
  const classes = useStyles();

  return (
    <Paper
      elevation={18}
      style={{
        width: "30%",
        height: "26vh",
        marginBottom: "2vh",
        borderRadius: "0.8em",
      }}
      className="animate-img"
    >
      <div className="change">
        <img src={props.url} alt={props.alt} className="proj-img" />
        <div className="layer">
          <Button
            variant="contained"
            style={{ backgroundColor: "#2c2b27" }}
            className={classes.btn}
          >
            Learn More
          </Button>
        </div>
      </div>
    </Paper>
  );
}
