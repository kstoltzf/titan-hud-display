import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface BrakeWarningLightState {
  isActive: boolean;
}

const initialState: BrakeWarningLightState = {
  isActive: false,
};

export const brakeWarningLightSlice = createSlice({
  name: "brakeWarningLight",
  initialState,
  reducers: {
    setBrakeWarningLightIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setBrakeWarningLightIsActive } = brakeWarningLightSlice.actions;
export const selectBrakeWarningLight = (state: RootState) =>
  state.brakeWarningLight.isActive;

export default brakeWarningLightSlice.reducer;
