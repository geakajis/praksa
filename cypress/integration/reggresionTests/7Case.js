import * as el from "../pages";
describe("Sedmi TestCase", function () {
  it("Check email address field validation - positive ", function () {
    el.homepage.goToLoginPage();
    cy.get("#create-account_form").should("be.visible");
    cy.get(el.homepage.input.emailInput).type("primer1@mail.com");
    cy.get(el.homepage.button.createAnAccount).click();
    cy.get("#account-creation_form").should("be.visible");
  });
});
