describe('History', () => {

  it('should have a history',  () => {
    cy.visit('/')

    cy.get('[data-cy=history-title]').contains('History is empty')
  })

  it('should change history title when history have items ',  () => {
    cy.get('[data-cy=history-title]').contains('History is empty')
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('1').click()
    cy.get('[data-cy=history-title]').contains('History')
  })

  it('should have history items when exist one operation',  () => {
    cy.get('button').contains('C').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('=').click()
    cy.get('[data-cy=history-items]').get('li').should('have.length', 1)
  })

  it('should history have a clean function',  () => {
    cy.visit('/settings')
    cy.get('[data-cy=history-clean-items]').click()
    cy.visit('/')
    cy.get('[data-cy=history-title]').contains('History is empty')
    cy.get('[data-cy=history-items]').get('li').should('have.length', 0)
  })

  it('should have history items when exist several operations',  () => {
    cy.get('button').contains('C').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('4').click()
    cy.get('button').contains('-').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('/').click()
    cy.get('button').contains('8').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('5').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('*').click()
    cy.get('button').contains('6').click()
    cy.get('button').contains('%').click()
    cy.get('button').contains('7').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('9').click()
    cy.get('button').contains('=').click()
    cy.get('[data-cy=history-items]').get('li').should('have.length', 7)
  })

})
