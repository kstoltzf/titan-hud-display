import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface TachometerState {
  currentRpms: number;
}

const initialState: TachometerState = {
  currentRpms: 0,
};

export const tachometerSlice = createSlice({
  name: "tachometer",
  initialState,
  reducers: {
    setCurrentRpms: (state, action: PayloadAction<number>) => {
      state.currentRpms = action.payload;
    },
  },
});

export const { setCurrentRpms } = tachometerSlice.actions;
export const getCurrentRpms = (state: RootState) =>
  state.tachometer.currentRpms;

export default tachometerSlice.reducer;
