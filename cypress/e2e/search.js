/// <reference types="cypress" />

import { homePage } from '../pages/index'

  describe('Validate Search', function() {
    beforeEach(function()  {
      cy.intercept('POST', '**/admin-ajax.php').as('search')
      cy.visit('/')
    })

    it('Validate search functionality - provide a search term', function() {
      homePage.validateSearch('cypress')
    })

  })

  

