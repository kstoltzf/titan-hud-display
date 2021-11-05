import coolantTemperatureLightIcon from "./coolant-temperature-light.png";
import { selectCoolantTemperatureLight } from "./CoolantTemperatureLightSlice";
import { useAppSelector } from "../app/Hooks";

export default function CoolantTemperatureLight() {
  const coolantTemperatureLightState = useAppSelector(
    selectCoolantTemperatureLight
  );

  return coolantTemperatureLightState ? (
    <img
      src={coolantTemperatureLightIcon}
      className="CoolantTemperatureLight-coolantTemperatureLightIcon"
      alt="coolantTemperatureLightIcon"
      data-cy="coolantTemperatureLightIcon"
    />
  ) : null;
}
