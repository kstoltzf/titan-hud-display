import { useAppSelector } from "../app/Hooks";
import { getCurrentSpeed } from "./SpeedometerSlice";

export default function Speedometer() {
  const currentSpeed = useAppSelector(getCurrentSpeed);

  return (
    <p
      aria-label="speedometer"
      style={{ fontSize: "xx-large" }}
      data-cy="speedometer"
    >
      {currentSpeed} MPH
    </p>
  );
}
