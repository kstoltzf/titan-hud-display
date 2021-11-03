import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface LowFuelLightState {
  isActive: boolean;
}

const initialState: LowFuelLightState = {
  isActive: false,
};

export const lowFuelLightSlice = createSlice({
  name: "lowFuelLight",
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setIsActive } = lowFuelLightSlice.actions;
export const selectLowFuelLight = (state: RootState) =>
  state.lowFuelLight.isActive;

export default lowFuelLightSlice.reducer;
