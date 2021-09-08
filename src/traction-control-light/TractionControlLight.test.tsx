import { render, screen } from "@testing-library/react";
import TractionControlLight from "./TractionControlLight";

test("renders traction control light", () => {
  render(<TractionControlLight />);
  const tractionControlLightElement = screen.getByAltText(
    "tractionControlLightIcon"
  );
  expect(tractionControlLightElement).toBeInTheDocument();
});
