import { render, screen } from "@testing-library/react";
import CheckEngineLight from "./CheckEngineLight";

test("renders check engine light", () => {
  render(<CheckEngineLight />);
  const checkEngineLightElement = screen.getByAltText("checkEngineLightIcon");
  expect(checkEngineLightElement).toBeInTheDocument();
});
