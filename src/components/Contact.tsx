import React, { useState } from "react";
import wave from "../assets/footer.svg";

import emailjs from "emailjs-com";
import {
  Button,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import beardSkull from "../assets/beardSkull.svg";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Recaptcha from "react-recaptcha";

const useStyles = makeStyles((theme: Theme) => ({
  textField: {
    color: "white !important",
    "& MuiFormLabel-root.Mui-focused": {
      color: "white",
    },
    "&:focus": {
      color: "white",
    },
    "&:after": {
      borderBottom: `2px solid white`,
    },
  },
}));
export default function Contact() {
  const classes = useStyles();
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [recaptchaLoad, setRecaptchaLoad] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  function recaptchaLoaded() {
    setRecaptchaLoad(true);
  }

  function verifiedRecaptcha(e: any) {
    if (e) {
      setIsVerified(true);
    }
  }

  function onNamechange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    setName(e.target.value);
  }
  function onEmailchange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    setEmail(e.target.value);
  }
  function onMessagechange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    setMessage(e.target.value);
  }
  function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (recaptchaLoad && isVerified) {
      emailjs
        .sendForm(
          "service_w2r0opg",
          "template_k3wjbrv",
          e.currentTarget,
          "user_qkbzIMF3yJlEwkCNLurHm"
        )
        .then(
          (result: { text: any }) => {
            console.log(result.text);
          },
          (error: { text: any }) => {
            console.log(error.text);
          }
        );
      resetForm();
    } else {
      alert("Please check the Recaptcha before sending your message");
    }
  }
  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }
  return (
    <div>
      <div style={{ backgroundColor: "#d6d6d6", height: "auto" }}>
        <img src={wave} alt="" />
      </div>
      <div
        style={{
          backgroundColor: "#2c2b27",
          height: "auto",
          marginTop: "-5vh",
          marginBottom: "-2vh",
        }}
      >
        <p
          id="contact"
          style={{ backgroundColor: "transparent", color: "transparent" }}
        >
          .
        </p>
        <p style={{ backgroundColor: "transparent", color: "transparent" }}>
          .
        </p>
        <p style={{ backgroundColor: "transparent", color: "transparent" }}>
          .
        </p>
        <h1 style={{ color: "white" }}>Contact Me</h1>
        <hr style={{ width: "5%", color: "white" }} />
        <div>
          <Typography variant="h6" style={{ color: "#c4c25f" }}>
            Want to work together? Schedule Coding or Music lessons?
          </Typography>

          <Typography
            variant="h6"
            style={{ color: "#c4c25f", marginBottom: "2vh" }}
          >
            Shoot me a message!
          </Typography>
        </div>
        <form className="contact-form" onSubmit={(e) => sendEmail(e)}>
          <TextField
            id="from_name"
            name="from_name"
            label="Name"
            variant="filled"
            value={name}
            required
            style={{ width: "50%", marginBottom: "1vh" }}
            onChange={(e) => onNamechange(e)}
            InputProps={{
              className: classes.textField,
            }}
            InputLabelProps={{
              className: classes.textField,
            }}
          />
          <TextField
            id="from_email"
            name="from_email"
            label="Email"
            value={email}
            required
            variant="filled"
            style={{ width: "50%", marginBottom: "1vh" }}
            onChange={(e) => onEmailchange(e)}
            InputProps={{
              className: classes.textField,
            }}
            InputLabelProps={{
              className: classes.textField,
            }}
          />
          <TextField
            id="message"
            name="message"
            label="Message"
            value={message}
            required
            variant="filled"
            style={{ width: "50%", marginBottom: "1vh" }}
            multiline
            rows={6}
            onChange={(e) => onMessagechange(e)}
            InputProps={{
              className: classes.textField,
            }}
            InputLabelProps={{
              className: classes.textField,
            }}
          />
          <Recaptcha
            sitekey="6LeqMgAaAAAAAE9IOOKeYk34ElJ8BT7NfgeXp7Gk"
            render="explicit"
            onloadCallback={recaptchaLoaded}
            verifyCallback={verifiedRecaptcha}
          />
          <Button
            variant="contained"
            type="submit"
            style={{ marginTop: "2vh" }}
          >
            Submit
          </Button>{" "}
        </form>
      </div>
      <div
        style={{
          backgroundColor: "#d6d6d6",
          height: "30vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <a href="https://github.com/Shleby">
          <GitHubIcon style={{ fontSize: "3em" }} />
        </a>
        <a href="https://www.facebook.com/shelby.huffman.564">
          <FacebookIcon style={{ fontSize: "4em" }} />
        </a>
        <img src={beardSkull} alt="" style={{ height: "20vh" }} />
        <a href="https://www.instagram.com/mr._.huffy">
          <InstagramIcon style={{ fontSize: "4em" }} />
        </a>
        <a href="https://www.linkedin.com/in/shelbyhuffy">
          <LinkedInIcon style={{ fontSize: "4em" }} />
        </a>
      </div>
    </div>
  );
}
