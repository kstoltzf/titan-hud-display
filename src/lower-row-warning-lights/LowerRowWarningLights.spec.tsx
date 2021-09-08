import { mount } from "@cypress/react";
import LowerRowWarningLights from "./LowerRowWarningLights";

it("renders all lower row warning lights", () => {
  mount(<LowerRowWarningLights />);

  cy.get("[data-cy=checkEngineLightIcon]").should("exist");
  cy.get("[data-cy=lowFuelLightIcon]").should("exist");
  cy.get("[data-cy=absWarningLightIcon]").should("exist");
  cy.get("[data-cy=tractionControlLightIcon]").should("exist");
});
