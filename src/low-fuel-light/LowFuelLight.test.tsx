import { render, screen } from "@testing-library/react";
import LowFuelLight from "./LowFuelLight";

test("renders low fuel light", () => {
  render(<LowFuelLight />);
  const lowFuelLightElement = screen.getByAltText("lowFuelLightIcon");
  expect(lowFuelLightElement).toBeInTheDocument();
});
