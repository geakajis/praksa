import * as el from "../pages";
import faker from "faker";
const email2 = faker.internet.email()
describe("Sesti TestCase", function () {
  it("Validate 'Create your account' page redirection", function () {
    el.homepage.goToLoginPage();
    cy.get("#create-account_form").should("be.visible");
    cy.get(el.homepage.input.emailInput).type(email2);
    cy.get(el.homepage.input.emailInput)
      .blur()
      .should("have.css", "color", "rgb(53, 179, 63)");
    cy.get(el.homepage.button.createAnAccount).click();
    cy.url().should(
      "contain",
      "http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation"
    );
  });
});
