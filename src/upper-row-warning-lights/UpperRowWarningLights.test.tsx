import { render, screen } from "@testing-library/react";
import UpperRowWarningLights from "./UpperRowWarningLights";

test("renders all upper row warning lights", () => {
  render(<UpperRowWarningLights />);

  const oilPressureLightElement = screen.getByAltText("oilPressureLightIcon");
  expect(oilPressureLightElement).toBeInTheDocument();

  const batteryLightElement = screen.getByAltText("batteryLightIcon");
  expect(batteryLightElement).toBeInTheDocument();

  const coolantTemperatureLightElement = screen.getByAltText(
    "coolantTemperatureLightIcon"
  );
  expect(coolantTemperatureLightElement).toBeInTheDocument();

  const brakeWarningLightElement = screen.getByAltText("brakeWarningLightIcon");
  expect(brakeWarningLightElement).toBeInTheDocument();
});
