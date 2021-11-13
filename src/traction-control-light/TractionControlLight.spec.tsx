import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import TractionControlLight from "./TractionControlLight";
import { setTractionControlLightIsActive } from "./TractionControlLightSlice";

describe("traction control light", () => {
  it("does not render when state is not active", () => {
    store.dispatch(setTractionControlLightIsActive(false));

    mount(
      <Provider store={store}>
        <TractionControlLight />
      </Provider>
    );

    cy.get("[data-cy=tractionControlLightIcon]").should("not.exist");
  });

  it("renders when state is active", () => {
    store.dispatch(setTractionControlLightIsActive(true));

    mount(
      <Provider store={store}>
        <TractionControlLight />
      </Provider>
    );

    cy.get("[data-cy=tractionControlLightIcon]").should("exist");
  });
});
