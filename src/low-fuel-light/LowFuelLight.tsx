import lowFuelLightIcon from "./low-fuel-light.png";
import { selectLowFuelLight } from "./LowFuelLightSlice";
import { useAppSelector } from "../app/Hooks";

export default function LowFuelLight() {
  const lowFuelLightState = useAppSelector(selectLowFuelLight);

  return lowFuelLightState ? (
    <img
      src={lowFuelLightIcon}
      className="LowFuelLight-lowFuelLightIcon"
      alt="lowFuelLightIcon"
      data-cy="lowFuelLightIcon"
    />
  ) : null;
}
