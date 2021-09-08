import { mount } from "@cypress/react";
import UpperRowWarningLights from "./UpperRowWarningLights";

it("renders all upper row warning lights", () => {
  mount(<UpperRowWarningLights />);

  cy.get("[data-cy=batteryLightIcon]").should("exist");
  cy.get("[data-cy=oilPressureLightIcon]").should("exist");
  cy.get("[data-cy=coolantTemperatureLightIcon]").should("exist");
  cy.get("[data-cy=brakeWarningLightIcon]").should("exist");
});
