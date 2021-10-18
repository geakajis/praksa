
export const homepage = {
  button: {
    createAnAccount: "button[id='SubmitCreate']",
    login: "a.login",
    register: "button[id='submitAccount']"
  },
  form: {
    createAnAccountForm: "form[id='create-account_form']",
    accountCreationForm: "input[id='account-creation_form']",
  },
  input: {
    emailInput: "input[id='email_create']",
    email: "input[id='email']",
    password: "input[id='passwd']",
    zipcode: "input[id='postcode']",
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
  

  validateMandatoryFields() {
   
    cy.get(this.input.emailInput).type("primer1@mail.com");
    cy.get(this.input.emailInput).blur().should('have.css', 'color', 'rgb(53, 179, 63)')
    cy.get(this.button.createAnAccount).click();
    cy.url().should(
      "contain",
      'http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation'
    );
    
    
  }
  
};
