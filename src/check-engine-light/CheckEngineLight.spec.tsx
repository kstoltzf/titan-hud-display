import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import CheckEngineLight from "./CheckEngineLight";
import { setCheckEngineLightIsActive } from "./CheckEngineLightSlice";

describe("check engine light", () => {
  it("does not render when state is not active", () => {
    store.dispatch(setCheckEngineLightIsActive(false));

    mount(
      <Provider store={store}>
        <CheckEngineLight />
      </Provider>
    );

    cy.get("[data-cy=checkEngineLightIcon]").should("not.exist");
  });

  it("renders when state is active", () => {
    store.dispatch(setCheckEngineLightIsActive(true));

    mount(
      <Provider store={store}>
        <CheckEngineLight />
      </Provider>
    );

    cy.get("[data-cy=checkEngineLightIcon]").should("exist");
  });
});
