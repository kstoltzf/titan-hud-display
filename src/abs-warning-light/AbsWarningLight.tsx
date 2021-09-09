import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import absWarningLightIcon from "./abs-warning-light.png";
import updateAbsWarningLight from "./AbsWarningLightService";
import { selectAbsWarningLight, setIsActive } from "./AbsWarningLightSlice";

export default function AbsWarningLight() {
  const absWarningLightState = useAppSelector(selectAbsWarningLight);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setIsActive(updateAbsWarningLight()));
  });

  return absWarningLightState ? (
    <img
      src={absWarningLightIcon}
      className="AbsWarningLight-absWarningLightIcon"
      alt="absWarningLightIcon"
      data-cy="absWarningLightIcon"
    />
  ) : null;
}
