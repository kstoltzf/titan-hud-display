import { mount } from "@cypress/react";
import OilPressureLight from "./OilPressureLight";

it("renders oil pressure light", () => {
  mount(<OilPressureLight />);
  cy.get("[data-cy=oilPressureLightIcon]").should("exist");
});
