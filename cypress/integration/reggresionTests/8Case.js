import * as el from "../pages";
describe("Osmi TestCase", function () {
  it("Validate mandatory fields", function () {
    el.homepage.goToLoginPage();
    el.homepage.validateMandatoryFields();
    cy.get(el.homepage.input.email).should("have.value", "primer1@mail.com");
    cy.get(el.homepage.button.register).click();
    cy.get(".alert")
      .contains("You must register at least one phone number.")
      .should("be.visible");
    cy.get(".alert").contains("lastname is required.").should("be.visible");
    cy.get(".alert").contains("firstname is required.").should("be.visible");
    cy.get(".alert").contains("passwd is required.").should("be.visible");
    cy.get(".alert").contains("address1 is required.").should("be.visible");
    cy.get(".alert").contains("city is required.").should("be.visible");
    cy.get(".alert")
      .contains(
        "The Zip/Postal code you've entered is invalid. It must follow this format: 00000"
      )
      .should("be.visible");
    cy.get(".alert")
      .contains("This country requires you to choose a State.")
      .should("be.visible");
  });
});
