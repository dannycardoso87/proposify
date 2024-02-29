/* eslint-disable linebreak-style */
/* eslint-disable cypress/no-unnecessary-waiting */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
import '@4tw/cypress-drag-drop'
require('@4tw/cypress-drag-drop')

Cypress.Commands.add('guiLoginProposify', (
  username = Cypress.env('USER_EMAIL'),
  password = Cypress.env('USER_PASSWORD')
) => {
  cy.visit('/login')
  cy.get('#pyLoginEmail').type(username)
  cy.get('#pyLoginPassword').type(password, { log: false })
  cy.contains('button', 'Login').click()
  cy.contains('h1', 'Welcome to Proposify, Danny!')
    .should('be.visible')
})

Cypress.Commands.add('sessionLoginProposify', (
  username = Cypress.env('USER_EMAIL'),
  password = Cypress.env('USER_PASSWORD')
) => {
  const login = () => cy.guiLoginProposify(username, password)
  cy.session(username, login)
  //save the session
})

Cypress.Commands.add('createDocument', (nameDocument) => {
  cy.get('span.svg-proposify-logo')
    .should('be.visible')
    .click()
  cy.get('[data-testid="create-document-button"]')
    .click()
  cy.get('div.ant-typography.proposify-typography.default-font.size-sm.timestamp-ml-xs')
    .should('be.visible')
    .should('include.text', 'Saved')
  cy.contains('div[aria-labelledby="rc-tabs-1-tab-document_tab"]', 'Coming soon...')
    .should('be.visible')
  cy.wait(3000)
  cy.get('input.document-title')
    .clear()
  cy.get('input.document-title')
    .type(nameDocument)
})

Cypress.Commands.add('deleteDocument', (nameDocument) => {
  cy.get('button[data-testid="trash-area-'+nameDocument+'"]')
    .click()
  cy.contains('.ant-list-items', nameDocument)
    .should('not.exist')
})

Cypress.Commands.add('emptyTrash', () => {
  cy.get('div[data-node-key="trash"] .ant-tabs-tab-btn')
    .click()
  cy.get('button.snackbar-btn')
    .click()
  cy.get('button[data-testid="buttonBase"].primary')
    .click()
  cy.get('.ant-list-empty-text')
    .should('have.text', 'No items in Trash')
})
