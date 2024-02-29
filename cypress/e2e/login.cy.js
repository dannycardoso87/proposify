/* eslint-disable linebreak-style */
/* eslint-disable indent */

describe('Login', () => {
  it('successfully logs in', () => {
    cy.guiLoginProposify()
    cy.get('span.svg-proposify-logo').should('be.visible')
  })
})
