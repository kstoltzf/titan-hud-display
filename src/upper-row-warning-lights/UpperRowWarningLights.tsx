import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import BatteryLight from "../battery-light/BatteryLight";
import OilPressureLight from "../oil-pressure-light/OilPressureLight";
import CoolantTemperatureLight from "../coolant-temperature-light/CoolantTemperatureLight";
import BrakeWarningLight from "../brake-warning-light/BrakeWarningLight";
import "./UpperRowWarningLights.css";

function UpperRowWarningLights() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className="UpperRowWarningLights-upperRowWarningLightsTable"
          aria-label="upperRowWarningLightsTable"
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

export default UpperRowWarningLights;
