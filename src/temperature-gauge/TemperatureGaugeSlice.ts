import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface TemperatureGaugeState {
  currentTemperature: number;
}

const initialState: TemperatureGaugeState = {
  currentTemperature: 0,
};

export const temperatureGaugeSlice = createSlice({
  name: "temperatureGauge",
  initialState,
  reducers: {
    setCurrentTemperature: (state, action: PayloadAction<number>) => {
      state.currentTemperature = action.payload;
    },
  },
});

export const { setCurrentTemperature } = temperatureGaugeSlice.actions;
export const getCurrentTemperature = (state: RootState) =>
  state.temperatureGauge.currentTemperature;

export default temperatureGaugeSlice.reducer;
