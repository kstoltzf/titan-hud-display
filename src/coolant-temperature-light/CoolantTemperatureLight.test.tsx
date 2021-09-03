import { render, screen } from "@testing-library/react";
import CoolantTemperatureLight from "./CoolantTemperatureLight";

test("renders coolant temperature light", () => {
  render(<CoolantTemperatureLight />);
  const coolantTemperatureLightElement = screen.getByAltText(
    "coolantTemperatureLightIcon"
  );
  expect(coolantTemperatureLightElement).toBeInTheDocument();
});
