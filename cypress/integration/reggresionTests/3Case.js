import * as el from "../pages";

describe("Treci TestCase", function () {
  it("Check 'Create an account' button validation", function () {
    el.homepage.goToLoginPage();
    cy.get("#create-account_form").should("be.visible");
    cy.get(el.homepage.button.createAnAccount).click();
    cy.get(".alert").contains("Invalid email address.").should("be.visible");
  });
});
