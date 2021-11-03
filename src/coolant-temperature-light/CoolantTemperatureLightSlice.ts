import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface CoolantTemperatureLightState {
  isActive: boolean;
}

const initialState: CoolantTemperatureLightState = {
  isActive: false,
};

export const coolantTemperatureLightSlice = createSlice({
  name: "coolantTemperatureLight",
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setIsActive } = coolantTemperatureLightSlice.actions;
export const selectCoolantTemperatureLight = (state: RootState) =>
  state.coolantTemperatureLight.isActive;

export default coolantTemperatureLightSlice.reducer;
