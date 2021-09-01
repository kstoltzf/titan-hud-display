import { mount } from '@cypress/react'
import CheckEngineLight from "./CheckEngineLight";

it("renders check engine light", () => {
  mount(<CheckEngineLight />);
  cy.get('[data-cy=checkEngineLightIcon]').should('exist')
});