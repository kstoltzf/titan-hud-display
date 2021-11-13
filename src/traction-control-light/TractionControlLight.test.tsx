import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import TractionControlLight from "./TractionControlLight";
import { setTractionControlLightIsActive } from "./TractionControlLightSlice";

describe("traction control light", () => {
  test("does not render when state is not active", () => {
    store.dispatch(setTractionControlLightIsActive(false));

    render(
      <Provider store={store}>
        <TractionControlLight />
      </Provider>
    );

    const tractionControlLightElement = screen.queryByAltText(
      "tractionControlLightIcon"
    );
    expect(tractionControlLightElement).toBeNull();
  });

  test("renders when state is active", () => {
    store.dispatch(setTractionControlLightIsActive(true));

    render(
      <Provider store={store}>
        <TractionControlLight />
      </Provider>
    );

    const tractionControlLightElement = screen.getByAltText(
      "tractionControlLightIcon"
    );
    expect(tractionControlLightElement).toBeInTheDocument();
  });
});
