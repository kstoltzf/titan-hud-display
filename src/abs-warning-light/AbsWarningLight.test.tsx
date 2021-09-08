import { render, screen } from "@testing-library/react";
import AbsWarningLight from "./AbsWarningLight";

test("renders abs warning light", () => {
  render(<AbsWarningLight />);
  const absWarningLightElement = screen.getByAltText("absWarningLightIcon");
  expect(absWarningLightElement).toBeInTheDocument();
});
