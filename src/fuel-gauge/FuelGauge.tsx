import { createStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { getCurrentFuelLevelPercent } from "./FuelGaugeSlice";
import { useAppSelector } from "../app/Hooks";

const BorderLinearProgress = withStyles(() =>
  createStyles({
    root: {
      height: 20,
      borderRadius: 5,
    },
    bar: {
      borderRadius: 5,
      backgroundColor: "#1a90ff",
    },
  })
)(LinearProgress);

export default function FuelGauge() {
  const currentFuelLevelPercent = useAppSelector(getCurrentFuelLevelPercent);

  return (
    <div className="">
      <p
        aria-label="fuelGaugeLabel"
        data-cy="fuelGaugeLabel"
        style={{ fontSize: "x-small" }}
      >
        Fuel
      </p>
      <BorderLinearProgress
        aria-label="fuelGaugeBar"
        data-cy="fuelGaugeBar"
        variant="determinate"
        value={currentFuelLevelPercent}
      />
      <p
        aria-label="fuelGaugeValue"
        data-cy="fuelGaugeValue"
        style={{ fontSize: "x-large" }}
      >
        {currentFuelLevelPercent}%
      </p>
    </div>
  );
}
