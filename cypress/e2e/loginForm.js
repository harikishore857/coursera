/// <reference types="cypress" />

import { homePage, loginFormPage } from '../pages/index'
import { userDetails } from '../fixtures/test_data'

  describe('Validate Signup Up From', function() {
    beforeEach(function()  {
      cy.visit('/')
      cy.clearCookies()
    })

    it('Validate successful submission of sign up form - Fill in all required fields', function() {
      homePage.navigateToLogin()
      loginFormPage.fillForm(userDetails)
      loginFormPage.submitForm()
      loginFormPage.validateSuccessfullLogin(userDetails.name)
    })

  })

  

