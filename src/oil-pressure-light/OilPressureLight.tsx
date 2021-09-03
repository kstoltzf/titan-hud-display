import oilPressureLightIcon from "./oil-pressure-light.png";
import "./OilPressureLight.css";

function OilPressureLight() {
  return (
    <img
      src={oilPressureLightIcon}
      className="OilPressureLight-oilPressureLightIcon"
      alt="oilPressureLightIcon"
      data-cy="oilPressureLightIcon"
    />
  );
}

export default OilPressureLight;
