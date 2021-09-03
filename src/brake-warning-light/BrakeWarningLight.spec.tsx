import { mount } from "@cypress/react";
import BrakeWarningLight from "./BrakeWarningLight";

it("renders brake warning light", () => {
  mount(<BrakeWarningLight />);
  cy.get("[data-cy=brakeWarningLightIcon]").should("exist");
});
