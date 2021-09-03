import { mount } from "@cypress/react";
import BatteryLight from "./BatteryLight";

it("renders check engine light", () => {
  mount(<BatteryLight />);
  cy.get("[data-cy=batteryLightIcon]").should("exist");
});
