import * as el from "../pages";
import faker from "faker";
const email2 = faker.internet.email()

describe("Cetvrti TestCase", function () {
  it("Check email address field validation - positive ", function () {
    el.homepage.goToLoginPage();
    cy.get("#create-account_form").should("be.visible");
    cy.get(el.homepage.input.emailInput).type(email2);
    cy.get(el.homepage.button.createAnAccount).click();
    cy.get("#account-creation_form").should("be.visible");
  });

  
});
