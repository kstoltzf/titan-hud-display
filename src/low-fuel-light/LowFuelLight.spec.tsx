import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import LowFuelLight from "./LowFuelLight";
import { setLowFuelLightIsActive } from "./LowFuelLightSlice";

describe("low fuel light", () => {
  it("does not render when state is not active", () => {
    store.dispatch(setLowFuelLightIsActive(false));

    mount(
      <Provider store={store}>
        <LowFuelLight />
      </Provider>
    );

    cy.get("[data-cy=lowFuelLightIcon]").should("not.exist");
  });

  it("renders when state is active", () => {
    store.dispatch(setLowFuelLightIsActive(true));

    mount(
      <Provider store={store}>
        <LowFuelLight />
      </Provider>
    );

    cy.get("[data-cy=lowFuelLightIcon]").should("exist");
  });
});
