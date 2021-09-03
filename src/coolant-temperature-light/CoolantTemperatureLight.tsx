import coolantTemperatureLightIcon from "./coolant-temperature-light.png";
import "./CoolantTemperatureLight.css";

function CoolantTemperatureLight() {
  return (
    <img
      src={coolantTemperatureLightIcon}
      className="CoolantTemperatureLight-coolantTemperatureLightIcon"
      alt="coolantTemperatureLightIcon"
      data-cy="coolantTemperatureLightIcon"
    />
  );
}

export default CoolantTemperatureLight;
