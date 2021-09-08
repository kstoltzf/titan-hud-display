import batteryLightIcon from "./battery-light.png";

export default function BatteryLight() {
  return (
    <img
      src={batteryLightIcon}
      className="BatteryLight-batteryLightIcon"
      alt="batteryLightIcon"
      data-cy="batteryLightIcon"
    />
  );
}
