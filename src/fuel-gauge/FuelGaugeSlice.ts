import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface FuelGaugeState {
  currentFuelLevelPercent: number;
}

const initialState: FuelGaugeState = {
  currentFuelLevelPercent: 0,
};

export const fuelGaugeSlice = createSlice({
  name: "fuelGauge",
  initialState,
  reducers: {
    setCurrentFuelLevelPercent: (state, action: PayloadAction<number>) => {
      state.currentFuelLevelPercent = action.payload;
    },
  },
});

export const { setCurrentFuelLevelPercent } = fuelGaugeSlice.actions;
export const getCurrentFuelLevelPercent = (state: RootState) =>
  state.fuelGauge.currentFuelLevelPercent;

export default fuelGaugeSlice.reducer;
