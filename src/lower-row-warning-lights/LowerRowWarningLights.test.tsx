import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { setAbsWarningLightIsActive } from "../abs-warning-light/AbsWarningLightSlice";
import { setCheckEngineLightIsActive } from "../check-engine-light/CheckEngineLightSlice";
import store from "../app/Store";
import LowerRowWarningLights from "./LowerRowWarningLights";
import { setLowFuelLightIsActive } from "../low-fuel-light/LowFuelLightSlice";
import {
  selectTractionControlLight,
  setTractionControlLightIsActive,
} from "../traction-control-light/TractionControlLightSlice";

describe("lower row warning lights", () => {
  test("do not render when states are not active", () => {
    render(
      <Provider store={store}>
        <LowerRowWarningLights />
      </Provider>
    );

    const checkEngineLightElement = screen.findByAltText(
      "checkEngineLightIcon"
    );
    expect(checkEngineLightElement).toMatchObject({});

    const lowFuelLightElement = screen.findByAltText("lowFuelLightIcon");
    expect(lowFuelLightElement).toMatchObject({});

    const absWarningLightElement = screen.findByAltText("absWarningLightIcon");
    expect(absWarningLightElement).toMatchObject({});

    const tractionControlLightElement = screen.findByAltText(
      "tractionControlLightIcon"
    );
    expect(tractionControlLightElement).toMatchObject({});
  });

  test("render when states are active", () => {
    store.dispatch(setAbsWarningLightIsActive(true));
    store.dispatch(setCheckEngineLightIsActive(true));
    store.dispatch(setLowFuelLightIsActive(true));
    // store.dispatch(setTractionControlLightIsActive(true))

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
