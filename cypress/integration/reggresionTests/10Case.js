import * as el from "../pages";
describe("Deseti TestCase", function () {
  it("Test Zip/Postal Code format validation", function () {
    el.homepage.goToLoginPage();
    el.homepage.validateMandatoryFields();
    cy.get(el.homepage.input.zipcode).type(1234);
    cy.get(el.homepage.button.register).click();
    cy.get(".alert")
      .contains(
        "The Zip/Postal code you've entered is invalid. It must follow this format: 00000"
      )
      .should("be.visible");
  });
});
