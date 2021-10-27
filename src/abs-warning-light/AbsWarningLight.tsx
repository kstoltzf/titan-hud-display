import { useAppSelector } from "../app/hooks";
import absWarningLightIcon from "./abs-warning-light.png";
import { selectAbsWarningLight } from "./AbsWarningLightSlice";

export default function AbsWarningLight() {
  const absWarningLightState = useAppSelector(selectAbsWarningLight);

  return absWarningLightState ? (
    <img
      src={absWarningLightIcon}
      className="AbsWarningLight-absWarningLightIcon"
      alt="absWarningLightIcon"
      data-cy="absWarningLightIcon"
    />
  ) : null;
}
