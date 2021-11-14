import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import Tachometer from "./Tachometer";
import { setCurrentRpms } from "./TachometerSlice";

describe("tachometer", () => {
  it("renders correct initial rpms", () => {
    store.dispatch(setCurrentRpms(0));

    mount(
      <Provider store={store}>
        <Tachometer />
      </Provider>
    );

    cy.get("[data-cy=tachometerText]").should("have.text", "0 RPMs");
    cy.get("[data-cy=tachometerBar]").should("have.prop", "ariaValueNow", "0");
  });

  it("renders correct updated rpms", () => {
    store.dispatch(setCurrentRpms(4200));

    mount(
      <Provider store={store}>
        <Tachometer />
      </Provider>
    );

    cy.get("[data-cy=tachometerText]").should("have.text", "4200 RPMs");
    cy.get("[data-cy=tachometerBar]").should("have.prop", "ariaValueNow", "42");
  });
});
