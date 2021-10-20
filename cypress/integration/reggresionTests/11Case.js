import * as el from "../pages";
import faker from "faker";
const email2 = faker.internet.email();
const mobilephone1 = faker.datatype.string();
describe("Jedanaesti TestCase", function () {
  it("Test 'Mobile phone' field validation", function () {
    el.homepage.goToLoginPage();
    cy.get("#create-account_form").should("be.visible");
    el.homepage.validateMandatoryFields(email2);
    cy.get(el.homepage.input.mobilephone).type(mobilephone1);
    cy.get(el.homepage.button.register).click();
    cy.get(".alert").contains("phone_mobile is invalid.").should("be.visible");
  });
});
