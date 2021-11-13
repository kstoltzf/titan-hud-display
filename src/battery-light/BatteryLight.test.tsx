import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import BatteryLight from "./BatteryLight";
import { setBatteryLightIsActive } from "./BatteryLightSlice";

describe("battery light", () => {
  test("does not render when state is not active", () => {
    render(
      <Provider store={store}>
        <BatteryLight />
      </Provider>
    );
    const batteryLightElement = screen.queryByAltText("batteryLightIcon");
    expect(batteryLightElement).toBeNull();
  });

  test("renders when state is active", () => {
    store.dispatch(setBatteryLightIsActive(true));

    render(
      <Provider store={store}>
        <BatteryLight />
      </Provider>
    );
    const batteryLightElement = screen.getByAltText("batteryLightIcon");
    expect(batteryLightElement).toBeInTheDocument();
  });
});
