import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { useAppDispatch } from "../app/Hooks";
import store from "../app/Store";
import LowerRowWarningLights from "./LowerRowWarningLights";

describe("lower row warning lights", () => {
  // const dispatch = useAppDispatch();

  test("does not render when state is not active", () => {
    render(
      <Provider store={store}>
        <LowerRowWarningLights />
      </Provider>
    );

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

  test("renders when state is active", () => {
    render(
      <Provider store={store}>
        <LowerRowWarningLights />
      </Provider>
    );

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
});
