import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CheckEngineLight from "./check-engine-light/CheckEngineLight";
import Tachometer from "./tachometer/Tachometer";
import BatteryLight from "./battery-light/BatteryLight";
import OilPressureLight from "./oil-pressure-light/OilPressureLight";
import CoolantTemperatureLight from "./coolant-temperature-light/CoolantTemperatureLight";
import BrakeWarningLight from "./brake-warning-light/BrakeWarningLight";

ReactDOM.render(
  <React.StrictMode>
    <BatteryLight />
    <OilPressureLight />
    <CoolantTemperatureLight />
    <BrakeWarningLight />
    <Tachometer />
    <CheckEngineLight />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
