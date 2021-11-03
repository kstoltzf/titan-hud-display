import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/Store";

export interface CheckEngineLightState {
  isActive: boolean;
}

const initialState: CheckEngineLightState = {
  isActive: false,
};

export const checkEngineLightSlice = createSlice({
  name: "checkEngineLight",
  initialState,
  reducers: {
    setIsActive: (state, action: PayloadAction<boolean>) => {
      state.isActive = action.payload;
    },
  },
});

export const { setIsActive } = checkEngineLightSlice.actions;
export const selectCheckEngineLight = (state: RootState) =>
  state.checkEngineLight.isActive;

export default checkEngineLightSlice.reducer;
