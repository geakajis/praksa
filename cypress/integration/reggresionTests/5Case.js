import * as el from "../pages";
import faker from "faker";
const email2 = faker.internet.email()

describe("Peti TestCase", function () {
  it("Validate email address uniqueness", function () {
    el.homepage.goToLoginPage();
    cy.get("#create-account_form").should("be.visible");
    cy.get(el.homepage.input.emailInput).type(email2);
    cy.get(el.homepage.button.createAnAccount).click();
    cy.get(".alert")
      .contains(
        "An account using this email address has already been registered. Please enter a valid password or request a new one."
      )
      .should("be.visible");
  });
});
