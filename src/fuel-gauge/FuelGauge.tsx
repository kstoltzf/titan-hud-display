import { createStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

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
  return (
    <div className="">
      <p style={{ fontSize: "x-small" }}>Fuel</p>
      <BorderLinearProgress variant="determinate" value={50} />
      <p style={{ fontSize: "x-large" }}>50%</p>
    </div>
  );
}
