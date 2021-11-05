import tractionControlLightIcon from "./traction-control-light.png";
import { useAppSelector } from "../app/Hooks";
import { selectTractionControlLight } from "./TractionControlLightSlice";

export default function TractionControlLight() {
  const tractionControlLightState = useAppSelector(selectTractionControlLight);

  return tractionControlLightState ? (
    <img
      src={tractionControlLightIcon}
      className="TractionControlLight-tractionControlLightIcon"
      alt="tractionControlLightIcon"
      data-cy="tractionControlLightIcon"
    />
  ) : null;
}
