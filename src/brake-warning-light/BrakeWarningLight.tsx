import brakeWarningLightIcon from "./brake-warning-light.png";
import "./BrakeWarningLight.css";

function BrakeWarningLight() {
  return (
    <img
      src={brakeWarningLightIcon}
      className="BrakeWarningLight-brakeWarningLightIcon"
      alt="brakeWarningLightIcon"
      data-cy="brakeWarningLightIcon"
    />
  );
}

export default BrakeWarningLight;
