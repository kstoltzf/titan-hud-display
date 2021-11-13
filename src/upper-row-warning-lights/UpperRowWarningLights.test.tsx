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

    const oilPressureLightElement = screen.queryByAltText(
      "oilPressureLightIcon"
    );
    expect(oilPressureLightElement).toBeNull();

    const batteryLightElement = screen.queryByAltText("batteryLightIcon");
    expect(batteryLightElement).toBeNull();

    const coolantTemperatureLightElement = screen.queryByAltText(
      "coolantTemperatureLightIcon"
    );
    expect(coolantTemperatureLightElement).toBeNull();

    const brakeWarningLightElement = screen.queryByAltText(
      "brakeWarningLightIcon"
    );
    expect(brakeWarningLightElement).toBeNull();
  });

  test("render when states are active", () => {
    store.dispatch(setOilPressureLightIsActive(true));
    store.dispatch(setBatteryLightIsActive(true));
    store.dispatch(setCoolantTemperatureLightIsActive(true));
    store.dispatch(setBrakeWarningLightIsActive(true));

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
