import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import updateStatus from "./AbsWarningLightService";

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
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setIsActive } = absWarningLightSlice.actions;
export const selectAbsWarningLight = (state: RootState) =>
  state.absWarningLight.isActive;

export default absWarningLightSlice.reducer;
