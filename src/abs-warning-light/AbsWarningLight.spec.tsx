import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import AbsWarningLight from "./AbsWarningLight";
import { setAbsWarningLightIsActive } from "./AbsWarningLightSlice";

describe("abs warning light", () => {
  it("does not render when state is not active", () => {
    store.dispatch(setAbsWarningLightIsActive(false));

    mount(
      <Provider store={store}>
        <AbsWarningLight />
      </Provider>
    );

    cy.get("[data-cy=absWarningLightIcon]").should("not.exist");
  });

  it("renders when state is active", () => {
    store.dispatch(setAbsWarningLightIsActive(true));

    mount(
      <Provider store={store}>
        <AbsWarningLight />
      </Provider>
    );

    cy.get("[data-cy=absWarningLightIcon]").should("exist");
  });
});
