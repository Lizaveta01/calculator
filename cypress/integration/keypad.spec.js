describe('Keypad', () => {

  it('should have a keys',  () => {
    cy.visit('/')

    cy.get('button').contains('+')
    cy.get('button').contains('-')
    cy.get('button').contains('*')
    cy.get('button').contains('/')
    cy.get('button').contains('%')
    cy.get('button').contains('=')
    cy.get('button').contains('.')
    cy.get('button').contains('(')
    cy.get('button').contains(')')
    cy.get('button').contains('CE')
    cy.get('button').contains('C')
    cy.get('button').contains('1')
    cy.get('button').contains('2')
    cy.get('button').contains('3')
    cy.get('button').contains('4')
    cy.get('button').contains('5')
    cy.get('button').contains('6')
    cy.get('button').contains('7')
    cy.get('button').contains('8')
    cy.get('button').contains('9')
    cy.get('button').contains('0')
  })

})
