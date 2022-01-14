import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route } from "react-router-dom";
import WebFont from "webfontloader";

ReactDOM.render(
  <React.StrictMode>
    <CreateRouting />
  </React.StrictMode>,
  document.getElementById("root")
);

function CreateRouting() {
  WebFont.load({
    google: {
      families: ["Quicksand", "sans-serif"],
    },
  });

  return (
    <Router>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/test">
        <h1>hey</h1>
      </Route>
    </Router>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
