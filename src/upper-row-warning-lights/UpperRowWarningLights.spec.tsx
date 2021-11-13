import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import { setBatteryLightIsActive } from "../battery-light/BatteryLightSlice";
import { setBrakeWarningLightIsActive } from "../brake-warning-light/BrakeWarningLightSlice";
import { setCoolantTemperatureLightIsActive } from "../coolant-temperature-light/CoolantTemperatureLightSlice";
import { setOilPressureLightIsActive } from "../oil-pressure-light/OilPressureLightSlice";
import UpperRowWarningLights from "./UpperRowWarningLights";

describe("upper row warning lights", () => {
  it("do not render when states are not active", () => {
    store.dispatch(setOilPressureLightIsActive(false));
    store.dispatch(setBatteryLightIsActive(false));
    store.dispatch(setCoolantTemperatureLightIsActive(false));
    store.dispatch(setBrakeWarningLightIsActive(false));

    mount(
      <Provider store={store}>
        <UpperRowWarningLights />
      </Provider>
    );

    cy.get("[data-cy=batteryLightIcon]").should("not.exist");
    cy.get("[data-cy=oilPressureLightIcon]").should("not.exist");
    cy.get("[data-cy=coolantTemperatureLightIcon]").should("not.exist");
    cy.get("[data-cy=brakeWarningLightIcon]").should("not.exist");
  });

  it("render when states are active", () => {
    store.dispatch(setOilPressureLightIsActive(true));
    store.dispatch(setBatteryLightIsActive(true));
    store.dispatch(setCoolantTemperatureLightIsActive(true));
    store.dispatch(setBrakeWarningLightIsActive(true));

    mount(
      <Provider store={store}>
        <UpperRowWarningLights />
      </Provider>
    );

    cy.get("[data-cy=batteryLightIcon]").should("exist");
    cy.get("[data-cy=oilPressureLightIcon]").should("exist");
    cy.get("[data-cy=coolantTemperatureLightIcon]").should("exist");
    cy.get("[data-cy=brakeWarningLightIcon]").should("exist");
  });
});
