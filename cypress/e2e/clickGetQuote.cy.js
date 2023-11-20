describe('Home Page', () => {
  it('Click Get a Quote button', () => {
    cy.visit('https://www.webplussupport.com.au/')
    cy.contains('Get a Quote').click()
    cy.get('input[data-original_id="name"]').scrollIntoView().should('be.visible')
    cy.get('input[data-original_id="name"]').type('Automated user')
    cy.get('input[data-original_id="email"]').type('automated.user@abc.com')
    cy.get('input[data-original_id="phone"]').type('0400000000')
    cy.get('select[data-original_id="source"]').select('Google')
    cy.get('[data-original_id="message"]').type('lorelipsum lorelipsum lorelipsum lorelipsum')
    cy.contains('send').click()
    cy.get('h2').should('have.text', 'Thank you for contacting us')
  })
})