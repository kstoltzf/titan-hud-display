import { mount } from "@cypress/react";
import { Provider } from "react-redux";
import store from "../app/Store";
import Speedometer from "./Speedometer";
import { setCurrentSpeed } from "./SpeedometerSlice";

describe("speedometer", () => {
  it("renders correct initial speed", () => {
    store.dispatch(setCurrentSpeed(0));

    mount(
      <Provider store={store}>
        <Speedometer />
      </Provider>
    );

    cy.get("[data-cy=speedometer]").should("have.text", "0 MPH");
  });

  it("renders correct updated speed", () => {
    store.dispatch(setCurrentSpeed(45));

    mount(
      <Provider store={store}>
        <Speedometer />
      </Provider>
    );

    cy.get("[data-cy=speedometer]").should("have.text", "45 MPH");
  });
});
