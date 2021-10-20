import * as el from "../pages";
describe("Cetvrti TestCase", function () {
    it("Check email address field validation - negative ", function () {
        el.homepage.goToLoginPage();
        cy.get("#create-account_form").should("be.visible");
        cy.get(el.homepage.input.emailInput).type("abc.def@mail#archive.com");
        cy.get(el.homepage.button.createAnAccount).click();
        cy.get(".alert").contains("Invalid email address.").should("be.visible");
      });
    });