import * as el from "../pages";
import faker from "faker"
const email2 = faker.internet.email()
const zipcode1 = faker.address.zipCode("####");
describe("Deseti TestCase", function () {
  it("Test Zip/Postal Code format validation", function () {
    el.homepage.goToLoginPage();
    el.homepage.validateMandatoryFields(email2);
    cy.get(el.homepage.input.zipcode).type(zipcode1);
    cy.get(el.homepage.button.register).click();
    cy.get(".alert")
      .contains(
        "The Zip/Postal code you've entered is invalid. It must follow this format: 00000"
      )
      .should("be.visible");
  });
});
