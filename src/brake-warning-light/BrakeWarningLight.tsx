import brakeWarningLightIcon from "./brake-warning-light.png";
import { selectBrakeWarningLight } from "./BrakeWarningLightSlice";
import { useAppSelector } from "../app/Hooks";

export default function BrakeWarningLight() {
  const brakeWarningLightState = useAppSelector(selectBrakeWarningLight);

  return brakeWarningLightState ? (
    <img
      src={brakeWarningLightIcon}
      className="BrakeWarningLight-brakeWarningLightIcon"
      alt="brakeWarningLightIcon"
      data-cy="brakeWarningLightIcon"
    />
  ) : null;
}
