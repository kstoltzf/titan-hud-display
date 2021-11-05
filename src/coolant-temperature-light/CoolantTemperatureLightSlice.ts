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
    setCoolantTemperatureLightIsActive: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isActive = action.payload;
    },
  },
});

export const { setCoolantTemperatureLightIsActive } =
  coolantTemperatureLightSlice.actions;
export const selectCoolantTemperatureLight = (state: RootState) =>
  state.coolantTemperatureLight.isActive;

export default coolantTemperatureLightSlice.reducer;
