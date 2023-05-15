/// <reference types="Cypress" />

const EMAIL = '#email'
const PASS = '#password'
const FULL_NAME = '#name'
const LOGIN = '[data-e2e="login-form-submit-button"]'
const PROFILE = '[data-e2e="UserPortraitFullName"]'

export default class loginFormPage {

  static fillForm({name, email, password}) {
    cy.get('span > ._eweitj').click()
    cy.get('#name').type(name)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
  }

  static submitForm() {
    cy.get('._6dgzsvq').click()
  }

  static validateSuccessfullLogin(name) {
    cy.get(PROFILE).should('have.text', name)
  }

}
