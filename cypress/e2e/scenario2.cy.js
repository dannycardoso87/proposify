/* eslint-disable linebreak-style */
/* eslint-disable indent */

describe('Scenario2', () => {
  it('scenario2', () => {
		cy.sessionLoginProposify()
		cy.visit('/onboard_checklist')
    const nameDocument = 'Document2'
    cy.createDocument(nameDocument)

    //Click on content tab
    cy.get('div[data-node-key="content_tab"]')
      .click()

    //Click on Image Block
    cy.get('div[data-testid="image-block-button"] .ant-typography')
      .should('have.text', 'Image')
      .click()

    //Upload first image
    const image1 = 'cypress/fixtures/Logo.png'
    cy.uploadImage(image1)

    //Upload second image
    const image2 = 'cypress/fixtures/Proposify.png'
    cy.uploadImage(image2)

    //Check if the 2 images were uploaded
    cy.get('.MuiImageListItem-img')
      .its('length')
      .should('be.at.least', 2)
  })
})
