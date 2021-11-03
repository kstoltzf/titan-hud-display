import { render, screen } from "@testing-library/react";
import AbsWarningLight from "./AbsWarningLight";
import { Provider } from "react-redux";
import { setIsActive } from "./AbsWarningLightSlice";
import store from "../app/Store";
import { useAppDispatch } from "../app/Hooks";

describe("abs warning light", () => {
  test("does not render when state is not active", () => {
    render(
      <Provider store={store}>
        <AbsWarningLight />
      </Provider>
    );
    const absWarningLightElement = screen.findByAltText("absWarningLightIcon");
    expect(absWarningLightElement).toBeNull();
  });

  test("renders when state is active", () => {
    // dispatch(setIsActive(true));
    render(
      <Provider store={store}>
        <AbsWarningLight />
      </Provider>
    );
    const absWarningLightElement = screen.getByAltText("absWarningLightIcon");
    expect(absWarningLightElement).toBeInTheDocument();
  });
});
