import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
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
          padding="normal"
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
