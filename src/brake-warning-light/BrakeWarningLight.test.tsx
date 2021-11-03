import { render, screen } from "@testing-library/react";
import BrakeWarningLight from "./BrakeWarningLight";

describe("brake warning light", () => {
  test("does not render when state is not active", () => {
    render(<BrakeWarningLight />);
    const brakeWarningLightElement = screen.findByAltText(
      "brakeWarningLightIcon"
    );
    expect(brakeWarningLightElement).toBeNull();
  });

  test("renders when state is active", () => {
    render(<BrakeWarningLight />);
    const brakeWarningLightElement = screen.getByAltText(
      "brakeWarningLightIcon"
    );
    expect(brakeWarningLightElement).toBeInTheDocument();
  });
});
