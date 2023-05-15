/// <reference types="Cypress" />


export default class homePage {

  static navigateToLogin() {
    cy.get('a').contains('Log In').click({force: true})
  }

  static navigateToMenu(menu) {
    cy.get('body').within(($el) => {
      if ($el.find('[class="_1l1hu98 show-smart-scroll-container"]').length == 1) {
        switch(menu) {
          case 'Individuals':
            cy.get('[data-track-component="navigation_meta_nav_Individuals"]').click()
            cy.get('.cds-119 > img[alt*=Coursera]').should('be.visible');
            cy.go('back')
            break;
          case 'Businesses':
            cy.get('[data-track-component="navigation_meta_nav_Business"]').click()
            cy.get('.cds-119 > img[alt*=business]').should('be.visible');
            cy.go('back')
            break;
          case 'Universities':
            cy.get('[data-track-component="navigation_meta_nav_Campus"]').click()
            cy.get('.cds-119 > img[alt*=campus]').should('be.visible');
            cy.go('back')
            break;
          case 'Governments':
            cy.get('[data-track-component="navigation_meta_nav_Government"]').click()
            cy.get('.cds-119 > img[alt*=government]').should('be.visible');
            cy.go('back')
            break;
        }
      } else {
        switch(menu) {
          case 'Individuals':
            cy.visit('/')
            cy.get('.cds-119 > img[alt*=Coursera]').should('be.visible');
            cy.go('back')
            break;
          case 'Businesses':
            cy.visit('/business')
            cy.get('.cds-119 > img[alt*=business]').should('be.visible');
            cy.go('back')
            break;
          case 'Universities':
            cy.visit('/campus')
            cy.get('.cds-119 > img[alt*=campus]').should('be.visible');
            cy.go('back')
            break;
          case 'Governments':
            cy.visit('/government')
            cy.get('[data-track-component="navigation_meta_nav_Government"]').click()
            cy.get('.cds-119 > img[alt*=government]').should('be.visible');
            cy.go('back')
            break;
        }
      }
      
    })
  }

  static validateSearch(searchTerm){
    cy.get('.react-autosuggest__input').type(searchTerm); 
    cy.get('.react-autosuggest__section-container.react-autosuggest__section-container').should('contain', searchTerm);
  }

}
