import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import { setBatteryLightIsActive } from "../battery-light/BatteryLightSlice";
import { setBrakeWarningLightIsActive } from "../brake-warning-light/BrakeWarningLightSlice";
import { setCoolantTemperatureLightIsActive } from "../coolant-temperature-light/CoolantTemperatureLightSlice";
import { setOilPressureLightIsActive } from "../oil-pressure-light/OilPressureLightSlice";
import UpperRowWarningLights from "./UpperRowWarningLights";

describe("upper row warning lights", () => {
  test("do not render when states are not active", () => {
    render(
      <Provider store={store}>
        <UpperRowWarningLights />
      </Provider>
    );

    const oilPressureLightElement = screen.findByAltText(
      "oilPressureLightIcon"
    );
    expect(oilPressureLightElement).toMatchObject({});

    const batteryLightElement = screen.findByAltText("batteryLightIcon");
    expect(batteryLightElement).toMatchObject({});

    const coolantTemperatureLightElement = screen.findByAltText(
      "coolantTemperatureLightIcon"
    );
    expect(coolantTemperatureLightElement).toMatchObject({});

    const brakeWarningLightElement = screen.findByAltText(
      "brakeWarningLightIcon"
    );
    expect(brakeWarningLightElement).toMatchObject({});
  });

  test("render when states are active", () => {
    store.dispatch(setOilPressureLightIsActive(true));
    store.dispatch(setBatteryLightIsActive(true));
    store.dispatch(setCoolantTemperatureLightIsActive(true));
    // store.dispatch(setBrakeWarningLightIsActive(true))

    render(
      <Provider store={store}>
        <UpperRowWarningLights />
      </Provider>
    );

    const oilPressureLightElement = screen.getByAltText("oilPressureLightIcon");
    expect(oilPressureLightElement).toBeInTheDocument();

    const batteryLightElement = screen.getByAltText("batteryLightIcon");
    expect(batteryLightElement).toBeInTheDocument();

    const coolantTemperatureLightElement = screen.getByAltText(
      "coolantTemperatureLightIcon"
    );
    expect(coolantTemperatureLightElement).toBeInTheDocument();

    const brakeWarningLightElement = screen.getByAltText(
      "brakeWarningLightIcon"
    );
    expect(brakeWarningLightElement).toBeInTheDocument();
  });
});
