import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Speedometer from "../speedometer/Speedometer";
import FuelGauge from "../fuel-gauge/FuelGauge";
import TemperatureGauge from "../temperature-gauge/TemperatureGauge";
import Tachometer from "../tachometer/Tachometer";

const useStyles = makeStyles({
  table: {
    minWidth: 480,
  },
});

export default function InfoRow() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="infoRowTable"
          padding="default"
        >
          <TableBody>
            <TableRow key="tachometerRow">
              <TableCell align="center" colSpan={3}>
                <Tachometer />
              </TableCell>
            </TableRow>
            <TableRow key="infoRow">
              <TableCell align="center" width="50%">
                <Speedometer />
              </TableCell>
              <TableCell align="center" width="25%">
                <TemperatureGauge />
              </TableCell>
              <TableCell align="center" width="25%">
                <FuelGauge />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
