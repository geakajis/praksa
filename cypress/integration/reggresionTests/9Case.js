import * as el from "../pages";
import faker from "faker";
const email2 = faker.internet.email();
const pass = faker.random.alphaNumeric(4);
describe("Deveti TestCase", function () {
  it("Check password length validation", function () {
    el.homepage.goToLoginPage();
    el.homepage.validateMandatoryFields(email2);
    cy.get(el.homepage.input.password).type(pass);
    cy.get(el.homepage.button.register).click();
    cy.get(".alert").contains("passwd is invalid.").should("be.visible");
  });
});
