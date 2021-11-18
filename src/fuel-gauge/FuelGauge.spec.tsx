import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import FuelGauge from "./FuelGauge";
import { setCurrentFuelLevelPercent } from "./FuelGaugeSlice";

describe("fuel gauge", () => {
  it("renders correct initial fuel level", () => {
    store.dispatch(setCurrentFuelLevelPercent(0));

    mount(
      <Provider store={store}>
        <FuelGauge />
      </Provider>
    );

    cy.get("[data-cy=fuelGaugeLabel]").should("have.text", "Fuel");
    cy.get("[data-cy=fuelGaugeBar]").should("have.prop", "ariaValueNow", "0");
    cy.get("[data-cy=fuelGaugeValue]").should("have.text", "0%");
  });

  it("renders correct updated rpms", () => {
    store.dispatch(setCurrentFuelLevelPercent(55));

    mount(
      <Provider store={store}>
        <FuelGauge />
      </Provider>
    );

    cy.get("[data-cy=fuelGaugeLabel]").should("have.text", "Fuel");
    cy.get("[data-cy=fuelGaugeBar]").should("have.prop", "ariaValueNow", "55");
    cy.get("[data-cy=fuelGaugeValue]").should("have.text", "55%");
  });
});
