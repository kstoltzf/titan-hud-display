import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Tachometer from "./tachometer/Tachometer";
import UpperRowWarningLights from "./upper-row-warning-lights/UpperRowWarningLights";
import LowerRowWarningLights from "./lower-row-warning-lights/LowerRowWarningLights";

ReactDOM.render(
  <React.StrictMode>
    <UpperRowWarningLights />
    <Tachometer />
    <LowerRowWarningLights />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
