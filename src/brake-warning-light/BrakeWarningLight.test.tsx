import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import BrakeWarningLight from "./BrakeWarningLight";
import { setBrakeWarningLightIsActive } from "./BrakeWarningLightSlice";

describe("brake warning light", () => {
  test("does not render when state is not active", () => {
    render(
      <Provider store={store}>
        <BrakeWarningLight />
      </Provider>
    );
    const brakeWarningLightElement = screen.findByAltText(
      "brakeWarningLightIcon"
    );
    expect(brakeWarningLightElement).toMatchObject({});
  });

  test("renders when state is active", () => {
    store.dispatch(setBrakeWarningLightIsActive(true));

    render(
      <Provider store={store}>
        <BrakeWarningLight />
      </Provider>
    );
    const brakeWarningLightElement = screen.getByAltText(
      "brakeWarningLightIcon"
    );
    expect(brakeWarningLightElement).toBeInTheDocument();
  });
});
