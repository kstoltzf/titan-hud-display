import { mount } from "@cypress/react";
import AbsWarningLight from "./AbsWarningLight";

it("renders abs warning light", () => {
  mount(<AbsWarningLight />);
  cy.get("[data-cy=absWarningLightIcon]").should("exist");
});
