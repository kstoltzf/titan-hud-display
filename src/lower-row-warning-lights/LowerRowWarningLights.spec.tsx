import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import { setAbsWarningLightIsActive } from "../abs-warning-light/AbsWarningLightSlice";
import store from "../app/Store";
import { setCheckEngineLightIsActive } from "../check-engine-light/CheckEngineLightSlice";
import { setLowFuelLightIsActive } from "../low-fuel-light/LowFuelLightSlice";
import { setTractionControlLightIsActive } from "../traction-control-light/TractionControlLightSlice";
import LowerRowWarningLights from "./LowerRowWarningLights";

describe("lower row warning lights", () => {
  it("do not render when states are not active", () => {
    store.dispatch(setAbsWarningLightIsActive(false));
    store.dispatch(setCheckEngineLightIsActive(false));
    store.dispatch(setLowFuelLightIsActive(false));
    store.dispatch(setTractionControlLightIsActive(false));

    mount(
      <Provider store={store}>
        <LowerRowWarningLights />
      </Provider>
    );

    cy.get("[data-cy=checkEngineLightIcon]").should("not.exist");
    cy.get("[data-cy=lowFuelLightIcon]").should("not.exist");
    cy.get("[data-cy=absWarningLightIcon]").should("not.exist");
    cy.get("[data-cy=tractionControlLightIcon]").should("not.exist");
  });

  it("render when states are active", () => {
    store.dispatch(setAbsWarningLightIsActive(true));
    store.dispatch(setCheckEngineLightIsActive(true));
    store.dispatch(setLowFuelLightIsActive(true));
    store.dispatch(setTractionControlLightIsActive(true));

    mount(
      <Provider store={store}>
        <LowerRowWarningLights />
      </Provider>
    );

    cy.get("[data-cy=checkEngineLightIcon]").should("exist");
    cy.get("[data-cy=lowFuelLightIcon]").should("exist");
    cy.get("[data-cy=absWarningLightIcon]").should("exist");
    cy.get("[data-cy=tractionControlLightIcon]").should("exist");
  });
});
