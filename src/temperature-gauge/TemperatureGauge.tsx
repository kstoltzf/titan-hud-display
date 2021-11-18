import { useAppSelector } from "../app/Hooks";
import { getCurrentTemperature } from "./TemperatureGaugeSlice";

export default function TemperatureGauge() {
  const currentTemperatue = useAppSelector(getCurrentTemperature);

  return (
    <div>
      <p         aria-label="temperatureGaugeLabel"
        data-cy="temperatureGaugeLabel" style={{ fontSize: "small" }}>Coolant Temperature</p>
      <p         aria-label="temperatureGaugeValue"
        data-cy="temperatureGaugeValue"style={{ fontSize: "x-large" }}>{currentTemperatue}&deg; F</p>
    </div>
  );
}
