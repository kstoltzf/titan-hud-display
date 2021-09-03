import checkEngineLightIcon from "./check-engine-light.png";
import "./CheckEngineLight.css";

function CheckEngineLight() {
  return (
    <img
      src={checkEngineLightIcon}
      className="CheckEngineLight-checkEngineLightIcon"
      alt="checkEngineLightIcon"
      data-cy="checkEngineLightIcon"
    />
  );
}

export default CheckEngineLight;
