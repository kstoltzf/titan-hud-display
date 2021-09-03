import { render, screen } from "@testing-library/react";
import BrakeWarningLight from "./BrakeWarningLight";

test("renders brake warning light", () => {
  render(<BrakeWarningLight />);
  const brakeWarningLightElement = screen.getByAltText("brakeWarningLightIcon");
  expect(brakeWarningLightElement).toBeInTheDocument();
});
