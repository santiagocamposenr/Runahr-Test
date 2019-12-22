describe('Principal Page', () => {

  it('The inputs search is visible', () => {
    cy.visit('/');
    cy.get('#root > header > div > div > div.MuiInputBase-root.search > input').should('be.visible')
  })

  it('The general card is visible in principal page', () => {
    cy.visit('/');
    cy.get('#root > div > div:nth-child(1) > div > button > div.MuiCardMedia-root.card-media').should('be.visible')
  })

  it('Show the details card after a click', () => {
    cy.visit('/');
    cy.get('#root > div > div:nth-child(1) > div > button > div.MuiCardContent-root').click()
    cy.get('#root > div > div > div').should('be.visible')
  })

  it('Show the details card after search', () => {
    cy.visit('/');
    cy.get('#root > header > div > div > div.MuiInputBase-root.search > input').as('search')
    cy.get('@search').type('Walter')
    cy.get('div').should('have.class', 'card')
  })

})

