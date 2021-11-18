import LinearProgress from "@mui/material/LinearProgress";
import { useAppSelector } from "../app/Hooks";
import { createStyles, withStyles } from "@mui/styles";
import { getCurrentRpms } from "./TachometerSlice";

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
  const currentRpms = useAppSelector(getCurrentRpms);

  return (
    <div className="">
      <BorderLinearProgress
        aria-label="tachometerBar"
        data-cy="tachometerBar"
        variant="determinate"
        value={currentRpms / 100}
      />
      <p
        aria-label="tachometerText"
        data-cy="tachometerText"
        style={{ fontSize: "xx-large" }}
      >
        {currentRpms} RPMs
      </p>
    </div>
  );
}
