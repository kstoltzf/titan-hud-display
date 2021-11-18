import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import absWarningLightReducer from "../abs-warning-light/AbsWarningLightSlice";
import checkEngineLightReducer from "../check-engine-light/CheckEngineLightSlice";
import lowFuelLightReducer from "../low-fuel-light/LowFuelLightSlice";
import batteryLightReducer from "../battery-light/BatteryLightSlice";
import brakeWarningLightReducer from "../brake-warning-light/BrakeWarningLightSlice";
import coolantTemperatureLightReducer from "../coolant-temperature-light/CoolantTemperatureLightSlice";
import oilPressureLightReducer from "../oil-pressure-light/OilPressureLightSlice";
import tractionControlLightReducer from "../traction-control-light/TractionControlLightSlice";
import speedometerReducer from "../speedometer/SpeedometerSlice";
import tachometerReducer from "../tachometer/TachometerSlice";
import fuelGaugeReducer from "../fuel-gauge/FuelGaugeSlice";

const store = configureStore({
  reducer: {
    absWarningLight: absWarningLightReducer,
    checkEngineLight: checkEngineLightReducer,
    lowFuelLight: lowFuelLightReducer,
    batteryLight: batteryLightReducer,
    brakeWarningLight: brakeWarningLightReducer,
    coolantTemperatureLight: coolantTemperatureLightReducer,
    oilPressureLight: oilPressureLightReducer,
    tractionControlLight: tractionControlLightReducer,
    speedometer: speedometerReducer,
    tachometer: tachometerReducer,
    fuelGauge: fuelGaugeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
