import { render, screen } from "@testing-library/react";
import BatteryLight from "./BatteryLight";

test("renders battery light", () => {
  render(<BatteryLight />);
  const batteryLightElement = screen.getByAltText("batteryLightIcon");
  expect(batteryLightElement).toBeInTheDocument();
});
