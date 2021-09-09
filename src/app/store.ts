import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import absWarningLightReducer from "../abs-warning-light/AbsWarningLightSlice";

const store = configureStore({
  reducer: {
    absWarningLight: absWarningLightReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
