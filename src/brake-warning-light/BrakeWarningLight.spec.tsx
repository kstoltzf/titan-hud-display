import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import BrakeWarningLight from "./BrakeWarningLight";
import { setBrakeWarningLightIsActive } from "./BrakeWarningLightSlice";

describe("brake warning light", () => {
  it("does not render when state is not active", () => {
    store.dispatch(setBrakeWarningLightIsActive(false));

    mount(
      <Provider store={store}>
        <BrakeWarningLight />
      </Provider>
    );

    cy.get("[data-cy=brakeWarningLightIcon]").should("not.exist");
  });

  it("renders when state is active", () => {
    store.dispatch(setBrakeWarningLightIsActive(true));

    mount(
      <Provider store={store}>
        <BrakeWarningLight />
      </Provider>
    );

    cy.get("[data-cy=brakeWarningLightIcon]").should("exist");
  });
});
