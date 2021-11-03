import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import BatteryLight from "./BatteryLight";

describe("battery light", () => {
  test("does not render when state is not active", () => {
    const renderResult = render(
      <Provider store={store}>
        <BatteryLight />
      </Provider>
    );
    const batteryLightElement = screen.findByAltText("batteryLightIcon");
    expect(batteryLightElement).toBeNull();
  });

  test("renders when state is active", () => {
    render(<BatteryLight />);
    const batteryLightElement = screen.getByAltText("batteryLightIcon");
    expect(batteryLightElement).toBeInTheDocument();
  });
});
