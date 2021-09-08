import { mount } from "@cypress/react";
import TractionControlLight from "./TractionControlLight";

it("renders traction control light", () => {
  mount(<TractionControlLight />);
  cy.get("[data-cy=tractionControlLightIcon]").should("exist");
});
