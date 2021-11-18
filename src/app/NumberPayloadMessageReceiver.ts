import { Socket } from "socket.io-client";
import { setCurrentFuelLevelPercent } from "../fuel-gauge/FuelGaugeSlice";
import { setCurrentSpeed } from "../speedometer/SpeedometerSlice";
import { setCurrentRpms } from "../tachometer/TachometerSlice";
import { setCurrentTemperature } from "../temperature-gauge/TemperatureGaugeSlice";

export default function NumberPayloadMessageReceiver(
  dispatch: (arg0: { payload: number; type: string }) => void,
  socket: Socket
): void {
  socket.on("fuelGaugeMessage", (msg: number) => {
    dispatch(setCurrentFuelLevelPercent(msg));
  });

  socket.on("speedometerMessage", (msg: number) => {
    dispatch(setCurrentSpeed(msg));
  });

  socket.on("tachometerMessage", (msg: number) => {
    dispatch(setCurrentRpms(msg));
  });

  socket.on("temperatureGaugeMessage", (msg: number) => {
    dispatch(setCurrentTemperature(msg));
  });
}
