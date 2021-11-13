import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import BatteryLight from "./BatteryLight";
import { setBatteryLightIsActive } from "./BatteryLightSlice";

describe("battery light", () => {
  it("does not render when state is not active", () => {
    store.dispatch(setBatteryLightIsActive(false));

    mount(
      <Provider store={store}>
        <BatteryLight />
      </Provider>
    );

    cy.get("[data-cy=batteryLightIcon]").should("not.exist");
  });
});
it("renders when state is active", () => {
  store.dispatch(setBatteryLightIsActive(true));

  mount(
    <Provider store={store}>
      <BatteryLight />
    </Provider>
  );

  cy.get("[data-cy=batteryLightIcon]").should("exist");
});
