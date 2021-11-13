import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import CoolantTemperatureLight from "./CoolantTemperatureLight";
import { setCoolantTemperatureLightIsActive } from "./CoolantTemperatureLightSlice";

describe("coolant temperature light", () => {
  it("does not render when state is not active", () => {
    store.dispatch(setCoolantTemperatureLightIsActive(false));

    mount(
      <Provider store={store}>
        <CoolantTemperatureLight />
      </Provider>
    );

    cy.get("[data-cy=coolantTemperatureLightIcon]").should("not.exist");
  });

  it("renders when state is active", () => {
    store.dispatch(setCoolantTemperatureLightIsActive(true));

    mount(
      <Provider store={store}>
        <CoolantTemperatureLight />
      </Provider>
    );

    cy.get("[data-cy=coolantTemperatureLightIcon]").should("exist");
  });
});
