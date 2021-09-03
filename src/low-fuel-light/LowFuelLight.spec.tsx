import { mount } from "@cypress/react";
import LowFuelLight from "./LowFuelLight";

it("renders low fuel light", () => {
  mount(<LowFuelLight />);
  cy.get("[data-cy=lowFuelLightIcon]").should("exist");
});
