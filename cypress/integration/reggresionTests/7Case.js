import * as el from "../pages";
import faker from "faker";
const email2 = faker.internet.email()
describe("Sedmi TestCase", function () {
  it("Check email address field validation - positive ", function () {
    l.homepage.goToLoginPage();
    el.homepage.validateMandatoryFields(email2);
    cy.get(el.homepage.input.email).should('have.value', email2);
    cy.get(el.homepage.input.email).should("be.enabled"); // PROMENI NA BE.DISABLED
  });
});
