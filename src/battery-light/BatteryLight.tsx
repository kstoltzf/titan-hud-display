import batteryLightIcon from "./battery-light.png";

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
