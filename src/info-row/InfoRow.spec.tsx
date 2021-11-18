import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import { setCurrentFuelLevelPercent } from "../fuel-gauge/FuelGaugeSlice";
import { setCurrentSpeed } from "../speedometer/SpeedometerSlice";
import { setCurrentRpms } from "../tachometer/TachometerSlice";
import { setCurrentTemperature } from "../temperature-gauge/TemperatureGaugeSlice";
import InfoRow from "./InfoRow";

describe("info row", () => {
  it("renders correctly with initial state", () => {
    store.dispatch(setCurrentRpms(0));
    store.dispatch(setCurrentSpeed(0));
    store.dispatch(setCurrentTemperature(0));
    store.dispatch(setCurrentFuelLevelPercent(0));

    mount(
      <Provider store={store}>
        <InfoRow />
      </Provider>
    );

    cy.get("[data-cy=tachometerText]").should("have.text", "0 RPMs");
    cy.get("[data-cy=tachometerBar]").should("have.prop", "ariaValueNow", "0");

    cy.get("[data-cy=speedometer]").should("have.text", "0 MPH");

    cy.get("[data-cy=temperatureGaugeLabel]").should(
      "have.text",
      "Coolant Temperature"
    );
    cy.get("[data-cy=temperatureGaugeValue]").should("have.text", "0° F");

    cy.get("[data-cy=fuelGaugeLabel]").should("have.text", "Fuel");
    cy.get("[data-cy=fuelGaugeBar]").should("have.prop", "ariaValueNow", "0");
    cy.get("[data-cy=fuelGaugeValue]").should("have.text", "0%");
  });

  it("renders correctly with updated state", () => {
    store.dispatch(setCurrentRpms(4200));
    store.dispatch(setCurrentSpeed(45));
    store.dispatch(setCurrentTemperature(35));
    store.dispatch(setCurrentFuelLevelPercent(55));

    mount(
      <Provider store={store}>
        <InfoRow />
      </Provider>
    );

    cy.get("[data-cy=tachometerText]").should("have.text", "4200 RPMs");
    cy.get("[data-cy=tachometerBar]").should("have.prop", "ariaValueNow", "42");

    cy.get("[data-cy=speedometer]").should("have.text", "45 MPH");

    cy.get("[data-cy=temperatureGaugeLabel]").should(
      "have.text",
      "Coolant Temperature"
    );
    cy.get("[data-cy=temperatureGaugeValue]").should("have.text", "35° F");

    cy.get("[data-cy=fuelGaugeLabel]").should("have.text", "Fuel");
    cy.get("[data-cy=fuelGaugeBar]").should("have.prop", "ariaValueNow", "55");
    cy.get("[data-cy=fuelGaugeValue]").should("have.text", "55%");
  });
});
