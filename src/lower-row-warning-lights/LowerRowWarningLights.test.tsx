import { render, screen } from "@testing-library/react";
import LowerRowWarningLights from "./LowerRowWarningLights";

test("renders all lower row warning lights", () => {
  render(<LowerRowWarningLights />);

  const checkEngineLightElement = screen.getByAltText("checkEngineLightIcon");
  expect(checkEngineLightElement).toBeInTheDocument();

  const lowFuelLightElement = screen.getByAltText("lowFuelLightIcon");
  expect(lowFuelLightElement).toBeInTheDocument();

  const absWarningLightElement = screen.getByAltText("absWarningLightIcon");
  expect(absWarningLightElement).toBeInTheDocument();

  const tractionControlLightElement = screen.getByAltText(
    "tractionControlLightIcon"
  );
  expect(tractionControlLightElement).toBeInTheDocument();
});
