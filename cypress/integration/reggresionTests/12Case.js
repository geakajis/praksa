import faker from "faker";

import * as el from "../pages";
const email2 = faker.internet.email();
const firstName1 = faker.name.firstName();
const lastName1 = faker.name.lastName();
const pass = faker.random.alphaNumeric(5);
const address2 = faker.address.streetAddress();
const city2 = faker.address.city();
const state2 = faker.address.state();
const zipcode1 = faker.address.zipCode("#####");
const mobilephone1 = faker.phone.phoneNumber();

describe("Dvanaesti TestCase", function () {
  it("Test Register functionality", function () {
    el.homepage.goToLoginPage();

    el.homepage.validateMandatoryFields(email2);
    cy.get(el.homepage.form.accountCreationForm).should("be.visible");
    cy.get(el.homepage.input.firstName).type(firstName1);
    cy.get(el.homepage.input.lastName).type(lastName1);
    cy.get(el.homepage.input.email).should("have.value", email2);
    cy.get(el.homepage.input.password).type(pass);

    cy.get(el.homepage.input.address1).type(address2);
    cy.get(el.homepage.input.city).type(city2);
    cy.get(el.homepage.select.state).select(state2);
    cy.get(el.homepage.input.zipcode).type(zipcode1);
    cy.get(el.homepage.input.mobilephone).type(mobilephone1);
    cy.get(el.homepage.input.addressAlias).type(address2);
    cy.get(el.homepage.button.register).click();
    cy.url().should(
      "contain",
      "http://automationpractice.com/index.php?controller=my-account"
    );
  });
});
