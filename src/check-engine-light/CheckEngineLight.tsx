import checkEngineLightIcon from "./check-engine-light.png";
import { selectCheckEngineLight } from "./CheckEngineLightSlice";
import { useAppSelector } from "../app/Hooks";

export default function CheckEngineLight() {
  const checkEngineLightState = useAppSelector(selectCheckEngineLight);

  return checkEngineLightState ? (
    <img
      src={checkEngineLightIcon}
      className="CheckEngineLight-checkEngineLightIcon"
      alt="checkEngineLightIcon"
      data-cy="checkEngineLightIcon"
    />
  ) : null;
}
