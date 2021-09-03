import batteryLightIcon from "./battery-light.png";
import "./BatteryLight.css";

function BatteryLight() {
  return (
    <img
      src={batteryLightIcon}
      className="BatteryLight-batteryLightIcon"
      alt="batteryLightIcon"
      data-cy="batteryLightIcon"
    />
  );
}

export default BatteryLight;
