import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import TemperatureGauge from "./TemperatureGauge";
import { setCurrentTemperature } from "./TemperatureGaugeSlice";

describe("temperature gauge", () => {
  it("renders correct initial temperature", () => {
    store.dispatch(setCurrentTemperature(0));

    mount(
      <Provider store={store}>
        <TemperatureGauge />
      </Provider>
    );

    cy.get("[data-cy=temperatureGaugeLabel]").should("have.text", "Coolant Temperature");
    cy.get("[data-cy=temperatureGaugeValue]").should("have.text", "0° F");
  });

  it("renders correct updated rpms", () => {
    store.dispatch(setCurrentTemperature(35));

    mount(
      <Provider store={store}>
        <TemperatureGauge />
      </Provider>
    );

    cy.get("[data-cy=temperatureGaugeLabel]").should("have.text", "Coolant Temperature");
    cy.get("[data-cy=temperatureGaugeValue]").should("have.text", "35° F");
  });
});
