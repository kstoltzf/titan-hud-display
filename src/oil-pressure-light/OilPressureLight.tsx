import oilPressureLightIcon from "./oil-pressure-light.png";
import { useAppSelector } from "../app/Hooks";
import { selectOilPressureLight } from "./OilPressureLightSlice";

export default function OilPressureLight() {
  const oilPressureLightState = useAppSelector(selectOilPressureLight);

  return oilPressureLightState ? (
    <img
      src={oilPressureLightIcon}
      className="OilPressureLight-oilPressureLightIcon"
      alt="oilPressureLightIcon"
      data-cy="oilPressureLightIcon"
    />
  ) : null;
}
