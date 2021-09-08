import LinearProgress from "@material-ui/core/LinearProgress";
import { createStyles, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles(() =>
  createStyles({
    root: {
      height: 40,
      borderRadius: 0,
    },
    bar: {
      borderRadius: 0,
      backgroundColor: "#1a90ff",
    },
  })
)(LinearProgress);

export default function Tachometer() {
  return (
    <div className="">
      <BorderLinearProgress variant="determinate" value={50} />
      <p>1200 RPMs</p>
    </div>
  );
}
