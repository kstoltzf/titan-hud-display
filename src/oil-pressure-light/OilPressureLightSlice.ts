import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface OilPressureLightState {
  isActive: boolean;
}

const initialState: OilPressureLightState = {
  isActive: false,
};

export const oilPressureLightSlice = createSlice({
  name: "oilPressureLight",
  initialState,
  reducers: {
    setOilPressureLightIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setOilPressureLightIsActive } = oilPressureLightSlice.actions;
export const selectOilPressureLight = (state: RootState) =>
  state.oilPressureLight.isActive;

export default oilPressureLightSlice.reducer;
