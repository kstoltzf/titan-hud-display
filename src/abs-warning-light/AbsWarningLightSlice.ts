import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface AbsWarningLightState {
  isActive: boolean;
}

const initialState: AbsWarningLightState = {
  isActive: false,
};

export const absWarningLightSlice = createSlice({
  name: "absWarningLight",
  initialState,
  reducers: {
    setAbsWarningLightIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setAbsWarningLightIsActive } = absWarningLightSlice.actions;
export const selectAbsWarningLight = (state: RootState) =>
  state.absWarningLight.isActive;

export default absWarningLightSlice.reducer;
