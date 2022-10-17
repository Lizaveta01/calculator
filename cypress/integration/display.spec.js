describe('Display', () => {

  it('should have a value when button click',  () => {
    cy.visit('/')
    cy.get('button').contains('C').click()
    cy.get('button').contains('5').click()
    cy.get('[data-cy=display-value]').contains('5')
    cy.get('button').contains('+').click()
    cy.get('[data-cy=display-value]').contains('5 + ')
    cy.get('button').contains('4').click()
    cy.get('[data-cy=display-value]').contains('5 + 4')
    cy.get('button').contains('-').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ')
    cy.get('button').contains('(').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( ')
    cy.get('button').contains('1').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1')
    cy.get('button').contains('*').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1 * ')
    cy.get('button').contains('2').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1 * 2')
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1 * 2 )')
    cy.get('button').contains('%').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1 * 2 ) % ')
    cy.get('button').contains('3').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1 * 2 ) % 3')
    cy.get('button').contains('/').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1 * 2 ) % 3 / ')
    cy.get('button').contains('6').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('9').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1 * 2 ) % 3 / 609')
    cy.get('button').contains('+').click()
    cy.get('button').contains('7').click()
    cy.get('button').contains('.').click()
    cy.get('button').contains('8').click()
    cy.get('[data-cy=display-value]').contains('5 + 4 - ( 1 * 2 ) % 3 / 609 + 7.8')
    cy.get('button').contains('=').click()
    cy.get('[data-cy=display-value]').contains('16.797')
    cy.get('button').contains('CE').click()
    cy.get('[data-cy=display-value]').contains('16.79')
    cy.get('button').contains('C').click()
    cy.get('[data-cy=display-value]').contains('0')
  })

})

describe('Validation display input', () => {

  it('when display has value Error',  () => {
    cy.visit('/')
    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('[data-cy=display-value]').contains('Error')
    cy.get('button').contains('1').click()
    cy.get('[data-cy=display-value]').contains('1')

    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('/').click()
    cy.get('[data-cy=display-value]').contains('0')

    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('*').click()
    cy.get('[data-cy=display-value]').contains('0')

    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('%').click()
    cy.get('[data-cy=display-value]').contains('0')

    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('+').click()
    cy.get('[data-cy=display-value]').contains('0')

    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('-').click()
    cy.get('[data-cy=display-value]').contains('0')

    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('(').click()
    cy.get('[data-cy=display-value]').contains('(')

    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('0')

    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('.').click()
    cy.get('[data-cy=display-value]').contains('0.')
  })

  it('when display has initial value 0',  () => {

    cy.get('button').contains('1').click()
    cy.get('[data-cy=display-value]').contains('1')

    cy.get('button').contains('C').click()

    cy.get('button').contains('*').click()
    cy.get('[data-cy=display-value]').contains('0 * ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('/').click()
    cy.get('[data-cy=display-value]').contains('0 / ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('-').click()
    cy.get('[data-cy=display-value]').contains(' - ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('+').click()
    cy.get('[data-cy=display-value]').contains('0 + ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('%').click()
    cy.get('[data-cy=display-value]').contains('0 % ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('[data-cy=display-value]').contains('(')

    cy.get('button').contains('C').click()

    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('0')
  })

  it('when display last symbol is number',  () => {
    cy.get('button').contains('C').click()

    cy.get('button').contains('1').click()
    cy.get('button').contains('1').click()
    cy.get('[data-cy=display-value]').contains('11')

    cy.get('button').contains('C').click()

    cy.get('button').contains('1').click()
    cy.get('button').contains('(').click()
    cy.get('[data-cy=display-value]').contains('1')

    cy.get('button').contains('C').click()

    cy.get('button').contains('1').click()
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('1')

    cy.get('button').contains('C').click()

    cy.get('button').contains('1').click()
    cy.get('button').contains('.').click()
    cy.get('[data-cy=display-value]').contains('1.')

    cy.get('button').contains('1').click()
    cy.get('button').contains('.').click()
    cy.get('[data-cy=display-value]').contains('1.1')

    cy.get('button').contains('C').click()

    cy.get('button').contains('1').click()
    cy.get('button').contains('-').click()
    cy.get('[data-cy=display-value]').contains('1 - ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('1').click()
    cy.get('button').contains('*').click()
    cy.get('[data-cy=display-value]').contains('1 * ')
  })

  it('when display last symbol is operation',  () => {
    cy.get('button').contains('C').click()

    cy.get('button').contains('*').click()
    cy.get('button').contains('1').click()
    cy.get('[data-cy=display-value]').contains('0 * 1')

    cy.get('button').contains('C').click()

    cy.get('button').contains('*').click()
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('0 *')

    cy.get('button').contains('C').click()

    cy.get('button').contains('*').click()
    cy.get('button').contains('.').click()
    cy.get('[data-cy=display-value]').contains('0 * 0.')

    cy.get('button').contains('C').click()

    cy.get('button').contains('*').click()
    cy.get('button').contains('(').click()
    cy.get('[data-cy=display-value]').contains('0 * (')
  })

  it('when display last symbol is closed bracket',  () => {
    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('( 1 )')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('(').click()
    cy.get('[data-cy=display-value]').contains('( 1 )')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('+').click()
    cy.get('[data-cy=display-value]').contains('( 1 ) + ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('1').click()
    cy.get('[data-cy=display-value]').contains('( 1 )')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains(')').click()
    cy.get('button').contains('.').click()
    cy.get('[data-cy=display-value]').contains('( 1 )')
  })

  it('when display last symbol is open bracket',  () => {
    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('(')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('*').click()
    cy.get('[data-cy=display-value]').contains('( 0 * ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('-').click()
    cy.get('[data-cy=display-value]').contains('( 0 - ')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('1').click()
    cy.get('[data-cy=display-value]').contains('( 1')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('.').click()
    cy.get('[data-cy=display-value]').contains('( 0.')

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('(').click()
    cy.get('[data-cy=display-value]').contains('( ( ')
  })

  it('when display last symbol is dot',  () => {
    cy.get('button').contains('C').click()

    cy.get('button').contains('.').click()
    cy.get('button').contains('(').click()
    cy.get('[data-cy=display-value]').contains('0.')

    cy.get('button').contains('C').click()

    cy.get('button').contains('.').click()
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('0.')

    cy.get('button').contains('C').click()

    cy.get('button').contains('.').click()
    cy.get('button').contains('+').click()
    cy.get('[data-cy=display-value]').contains('0.')

    cy.get('button').contains('C').click()

    cy.get('button').contains('.').click()
    cy.get('button').contains('-').click()
    cy.get('[data-cy=display-value]').contains('0.')

    cy.get('button').contains('.').click()
    cy.get('button').contains('.').click()
    cy.get('[data-cy=display-value]').contains('0.')

    cy.get('button').contains('C').click()

    cy.get('button').contains('.').click()
    cy.get('button').contains('1').click()
    cy.get('[data-cy=display-value]').contains('0.1')
    cy.get('button').contains('6').click()
    cy.get('[data-cy=display-value]').contains('0.16')
  })

  it('check number closed brackets',  () => {

    cy.get('button').contains('C').click()

    cy.get('button').contains('(').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('( 1 + 2 )')

    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('( 1 + 2 )')

    cy.get('button').contains('+').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('1').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('2').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('(').click()
    cy.get('button').contains('3').click()
    cy.get('button').contains('+').click()
    cy.get('button').contains('4').click()
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('( 1 + 2 ) + ( 1 + ( 2 + ( 3 + 4 )')
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('( 1 + 2 ) + ( 1 + ( 2 + ( 3 + 4 ) )')
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('( 1 + 2 ) + ( 1 + ( 2 + ( 3 + 4 ) ) )')
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('( 1 + 2 ) + ( 1 + ( 2 + ( 3 + 4 ) ) )')
    cy.get('button').contains(')').click()
    cy.get('[data-cy=display-value]').contains('( 1 + 2 ) + ( 1 + ( 2 + ( 3 + 4 ) ) )')
  })

  it('if value is Error and you click CE',  () => {


    cy.get('button').contains('/').click()
    cy.get('button').contains('0').click()
    cy.get('button').contains('=').click()
    cy.get('button').contains('CE').click()
    cy.get('[data-cy=display-value]').contains('0')

  })

  it('if value is 0 and you click CE',  () => {

    cy.get('button').contains('CE').click()
    cy.get('[data-cy=display-value]').contains('0')

  })

})
