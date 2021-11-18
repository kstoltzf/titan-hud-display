import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CheckEngineLight from "../check-engine-light/CheckEngineLight";
import LowFuelLight from "../low-fuel-light/LowFuelLight";
import "./LowerRowWarningLights.css";
import { makeStyles } from "@mui/styles";
import TractionControlLight from "../traction-control-light/TractionControlLight";
import AbsWarningLight from "../abs-warning-light/AbsWarningLight";

const useStyles = makeStyles({
  table: {
    minWidth: 480,
  },
});

export default function LowerRowWarningLights() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="lowerRowWarningLightsTable"
          padding="none"
        >
          <TableBody>
            <TableRow key="LowerRowWarningLights">
              <TableCell align="center">
                <CheckEngineLight />
              </TableCell>
              <TableCell align="center">
                <LowFuelLight />
              </TableCell>
              <TableCell align="center">
                <AbsWarningLight />
              </TableCell>
              <TableCell align="center">
                <TractionControlLight />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
