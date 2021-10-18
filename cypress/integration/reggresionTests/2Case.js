import * as el from "../pages";
describe("Drugi TestCase", function () {
  it("Validate correct rendering 'Create an account' section", function () {
    el.homepage.goToLoginPage();
    cy.get("#create-account_form").should("be.visible");
  });
});
