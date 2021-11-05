import batteryLightIcon from "./battery-light.png";
import { useAppSelector } from "../app/Hooks";
import { selectBatteryLight } from "./BatteryLightSlice";

export default function BatteryLight() {
  const batteryLightState = useAppSelector(selectBatteryLight);

  return batteryLightState ? (
    <img
      src={batteryLightIcon}
      className="BatteryLight-batteryLightIcon"
      alt="batteryLightIcon"
      data-cy="batteryLightIcon"
    />
  ) : null;
}
