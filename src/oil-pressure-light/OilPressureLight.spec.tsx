import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import OilPressureLight from "./OilPressureLight";
import { setOilPressureLightIsActive } from "./OilPressureLightSlice";

describe("oil pressure light", () => {
  it("does not render when state is not active", () => {
    store.dispatch(setOilPressureLightIsActive(false));

    mount(
      <Provider store={store}>
        <OilPressureLight />
      </Provider>
    );

    cy.get("[data-cy=oilPressureLightIcon]").should("not.exist");
  });

  it("renders when state is active", () => {
    store.dispatch(setOilPressureLightIsActive(true));

    mount(
      <Provider store={store}>
        <OilPressureLight />
      </Provider>
    );

    cy.get("[data-cy=oilPressureLightIcon]").should("exist");
  });
});
