/// <reference types="cypress" />

import { homePage, loginFormPage } from '../pages/index'

  describe('Validate Landing Page', function() {
    beforeEach(function()  {
      cy.viewport(1000, 660)
      cy.visit('/')
    })

    it('Validate header menu items', function() {
        const menuItems = ['Businesses', 'Universities', 'Governments']
        menuItems.forEach((menu) => {
            homePage.navigateToMenu(menu)
        })
    })

  })

  

