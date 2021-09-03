import { render, screen } from "@testing-library/react";
import OilPressureLight from "./OilPressureLight";

test("renders oil pressure light", () => {
  render(<OilPressureLight />);
  const oilPressureLightElement = screen.getByAltText("oilPressureLightIcon");
  expect(oilPressureLightElement).toBeInTheDocument();
});
