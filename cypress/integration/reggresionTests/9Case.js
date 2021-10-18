import * as el from "../pages";
describe("Deveti TestCase", function () {
  it("Check password length validation", function () {
    el.homepage.goToLoginPage();
    el.homepage.validateMandatoryFields();
    cy.get(el.homepage.input.password).type("fgff");
    cy.get(el.homepage.button.register).click();
    cy.get(".alert").contains("passwd is invalid.").should("be.visible");
  });
});
