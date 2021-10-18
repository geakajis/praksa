
export const homepage = {
  button: {
    createAnAccount: "button[id='SubmitCreate']",
    login: "a.login",
    register: "button[id='submitAccount']"
  },
  form: {
    createAnAccountForm: "form[id='create-account_form']",
    accountCreationForm: "form[id='account-creation_form']",
  },
  input: {
    firstName: "input[id='customer_firstname']",
    lastName: "input[id='customer_lastname']",
    firstName1: "input[id='firstname']",
    lastName1: "input[id='lastname']",
    city: "input[id='city']",
    emailInput: "input[id='email_create']",
    email: "input[id='email']",
    password: "input[id='passwd']",
    address1: "input[id='address1']",
    zipcode: "input[id='postcode']",
    mobilephone: "input[id='phone_mobile']",
    addressAlias: "input[id='alias']"
  },
  select: {
    state: "select[id='id_state']",
  },
  goToLoginPage() {
    cy.visit("http://automationpractice.com/index.php");
    cy.contains("Sign in").should("be.visible");
    cy.get(this.button.login).click();
    cy.url().should(
      "contain",
      "http://automationpractice.com/index.php?controller=authentication&back=my-account"
    );
  },
  

  validateMandatoryFields(email) {
   
    cy.get(this.input.emailInput).type(email);
    cy.get(this.input.emailInput).blur().should('have.css', 'color', 'rgb(53, 179, 63)')
    cy.get(this.button.createAnAccount).click();
    cy.url().should(
      "contain",
      'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation'
    );
    
    
  }
  
};
