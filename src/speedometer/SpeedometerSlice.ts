import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface SpeedometerState {
  currentSpeed: number;
}

const initialState: SpeedometerState = {
  currentSpeed: 0,
};

export const speedometerSlice = createSlice({
  name: "speedometer",
  initialState,
  reducers: {
    setCurrentSpeed: (state, action: PayloadAction<number>) => {
      state.currentSpeed = action.payload;
    },
  },
});

export const { setCurrentSpeed } = speedometerSlice.actions;
export const getCurrentSpeed = (state: RootState) =>
  state.speedometer.currentSpeed;

export default speedometerSlice.reducer;
