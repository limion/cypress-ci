/// <reference types="cypress" />

context('Test Simple React App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  describe('When user opens the main page', () => {
    it('Learn React link should be visible', () => {
      cy.contains('Learn React').should('be.visible');
    })
  })
})
