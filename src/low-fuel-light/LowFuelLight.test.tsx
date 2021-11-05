import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import LowFuelLight from "./LowFuelLight";
import { setLowFuelLightIsActive } from "./LowFuelLightSlice";

describe("low fuel light", () => {
  test("does not render when state is not active", () => {
    render(
      <Provider store={store}>
        <LowFuelLight />
      </Provider>
    );
    const lowFuelLightElement = screen.findByAltText("lowFuelLightIcon");
    expect(lowFuelLightElement).toMatchObject({});
  });

  test("renders when state is active", () => {
    store.dispatch(setLowFuelLightIsActive(true));

    render(
      <Provider store={store}>
        <LowFuelLight />
      </Provider>
    );
    const lowFuelLightElement = screen.getByAltText("lowFuelLightIcon");
    expect(lowFuelLightElement).toBeInTheDocument();
  });
});
