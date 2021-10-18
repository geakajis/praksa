import * as el from "../pages";
describe("Peti TestCase", function () {
  it("Validate email address uniqueness", function () {
    el.homepage.goToLoginPage();
    cy.get("#create-account_form").should("be.visible");
    cy.get(el.homepage.input.emailInput).type("example@mail.com");
    cy.get(el.homepage.button.createAnAccount).click();
    cy.get(".alert")
      .contains(
        "An account using this email address has already been registered. Please enter a valid password or request a new one."
      )
      .should("be.visible");
  });
});
