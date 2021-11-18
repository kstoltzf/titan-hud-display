import { setAbsWarningLightIsActive } from "../abs-warning-light/AbsWarningLightSlice";
import { Socket } from "socket.io-client";
import { setBatteryLightIsActive } from "../battery-light/BatteryLightSlice";
import { setBrakeWarningLightIsActive } from "../brake-warning-light/BrakeWarningLightSlice";
import { setCheckEngineLightIsActive } from "../check-engine-light/CheckEngineLightSlice";
import { setCoolantTemperatureLightIsActive } from "../coolant-temperature-light/CoolantTemperatureLightSlice";
import { setLowFuelLightIsActive } from "../low-fuel-light/LowFuelLightSlice";
import { setOilPressureLightIsActive } from "../oil-pressure-light/OilPressureLightSlice";
import { setTractionControlLightIsActive } from "../traction-control-light/TractionControlLightSlice";

export default function NumberPayloadMessageReceiver(
  dispatch: (arg0: { payload: boolean; type: string }) => void,
  socket: Socket
): void {
  socket.on("absWarningLightMessage", (msg: boolean) => {
    dispatch(setAbsWarningLightIsActive(msg));
  });

  socket.on("batteryLightMessage", (msg: boolean) => {
    dispatch(setBatteryLightIsActive(msg));
  });

  socket.on("brakeWarningLightMessage", (msg: boolean) => {
    dispatch(setBrakeWarningLightIsActive(msg));
  });

  socket.on("checkEngineLightMessage", (msg: boolean) => {
    dispatch(setCheckEngineLightIsActive(msg));
  });

  socket.on("coolantTemperatureLightMessage", (msg: boolean) => {
    dispatch(setCoolantTemperatureLightIsActive(msg));
  });

  socket.on("lowFuelLightMessage", (msg: boolean) => {
    dispatch(setLowFuelLightIsActive(msg));
  });

  socket.on("oilPressureLightMessage", (msg: boolean) => {
    dispatch(setOilPressureLightIsActive(msg));
  });

  socket.on("tractionControlLightMessage", (msg: boolean) => {
    dispatch(setTractionControlLightIsActive(msg));
  });
}
