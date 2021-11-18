import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import BatteryLight from "../battery-light/BatteryLight";
import OilPressureLight from "../oil-pressure-light/OilPressureLight";
import CoolantTemperatureLight from "../coolant-temperature-light/CoolantTemperatureLight";
import BrakeWarningLight from "../brake-warning-light/BrakeWarningLight";
import "./UpperRowWarningLights.css";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  table: {
    minWidth: 480,
  },
});

export default function UpperRowWarningLights() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          aria-label="upperRowWarningLightsTable"
          padding="none"
        >
          <TableBody>
            <TableRow key="upperRowWarningLights">
              <TableCell align="center">
                <BatteryLight />
              </TableCell>
              <TableCell align="center">
                <OilPressureLight />
              </TableCell>
              <TableCell align="center">
                <CoolantTemperatureLight />
              </TableCell>
              <TableCell align="center">
                <BrakeWarningLight />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
