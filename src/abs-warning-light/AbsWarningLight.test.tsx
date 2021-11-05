import { render, screen } from "@testing-library/react";
import AbsWarningLight from "./AbsWarningLight";
import { Provider } from "react-redux";
import absWarningLightReducer, {
  AbsWarningLightState,
  setAbsWarningLightIsActive,
  selectAbsWarningLight,
} from "./AbsWarningLightSlice";
import store from "../app/Store";
import { useAppSelector } from "../app/Hooks";

describe("abs warning light", () => {
  test("does not render when state is not active", () => {
    render(
      <Provider store={store}>
        <AbsWarningLight />
      </Provider>
    );
    const absWarningLightElement = screen.findByAltText("absWarningLightIcon");
    expect(absWarningLightElement).toMatchObject({});
  });

  test("renders when state is active", () => {
    store.dispatch(setAbsWarningLightIsActive(true));

    render(
      <Provider store={store}>
        <AbsWarningLight />
      </Provider>
    );

    const absWarningLightElement = screen.getByAltText("absWarningLightIcon");
    expect(absWarningLightElement).toBeInTheDocument();
  });
});
