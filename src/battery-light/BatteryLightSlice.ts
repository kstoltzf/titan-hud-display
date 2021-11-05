import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface BatteryLightState {
  isActive: boolean;
}

const initialState: BatteryLightState = {
  isActive: false,
};

export const batteryLightSlice = createSlice({
  name: "batteryLight",
  initialState,
  reducers: {
    setBatteryLightIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setBatteryLightIsActive } = batteryLightSlice.actions;
export const selectBatteryLight = (state: RootState) =>
  state.batteryLight.isActive;

export default batteryLightSlice.reducer;
