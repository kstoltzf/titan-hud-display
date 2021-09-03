import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckEngineLight from "../check-engine-light/CheckEngineLight";
import LowFuelLight from "../low-fuel-light/LowFuelLight";
import "./LowerRowWarningLights.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 640,
  },
});

function LowerRowWarningLights() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="lowerRowWarningLightsTable"
        >
          <TableBody>
            <TableRow key="LowerRowWarningLights">
              {/* <TableCell align="center">
                <EpcLight />
              </TableCell> */}
              <TableCell align="center">
                <CheckEngineLight />
              </TableCell>
              <TableCell align="center">
                <LowFuelLight />
              </TableCell>
              {/* <TableCell align="center">
                <AbsWarningLight />
              </TableCell> */}
              {/* <TableCell align="center">
                <TractionControlLight />
              </TableCell> */}
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default LowerRowWarningLights;
