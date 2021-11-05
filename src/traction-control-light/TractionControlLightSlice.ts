import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface TractionControlLightState {
  isActive: boolean;
}

const initialState: TractionControlLightState = {
  isActive: false,
};

export const tractionControlLightSlice = createSlice({
  name: "tractionControlLight",
  initialState,
  reducers: {
    setTractionControlLightIsActive: (
      state,
      action: PayloadAction<boolean>
    ) => {
      state.isActive = action.payload;
    },
  },
});

export const { setTractionControlLightIsActive } =
  tractionControlLightSlice.actions;
export const selectTractionControlLight = (state: RootState) =>
  state.tractionControlLight.isActive;

export default tractionControlLightSlice.reducer;
