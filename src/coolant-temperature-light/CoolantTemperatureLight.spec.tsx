import { mount } from "@cypress/react";
import CoolantTemperatureLight from "./CoolantTemperatureLight";

it("renders coolant temperature light", () => {
  mount(<CoolantTemperatureLight />);
  cy.get("[data-cy=coolantTemperatureLightIcon]").should("exist");
});
