describe('Navigation', () => {

  it('should have a settings page',  () => {
    cy.visit('/')

    cy.contains('Settings').click()
    cy.location('pathname').should('eq', '/settings')
    cy.go('back')
  })

  it('should have a home page',  () => {
      cy.visit('/settings')

      cy.contains('Home').click()
      cy.location('pathname').should('eq', '/')
      cy.go('back')
    })

  it('should have not a burger menu when width more then 768px',  () => {
    cy.visit('/settings')
    cy.get('[data-cy=burger-icon]').should('not.be.visible')
  })

  it('should burger menu closed when click to close menu',  () => {
    cy.visit('/')
    cy.viewport(768, 550)
    cy.get('[data-cy=link-wrapper]').should('not.be.visible')
    cy.get('[data-cy=burger-icon]').click()
    cy.get('[data-cy=link-wrapper]').should('be.visible')
  })

  it('should have a navigation links in burger menu',  () => {
    cy.visit('/')
    cy.viewport(768, 550)

    cy.get('[data-cy=burger-icon]').click()
    cy.get('a').contains('Home').should('have.css', 'pointer-events', "none")
    cy.contains('Settings').click()
    cy.location('pathname').should('eq', '/settings')
    cy.get('a').contains('Settings').should('have.class', 'active')

    cy.get('[data-cy=burger-icon]').click()
    cy.contains('Home').click()
    cy.location('pathname').should('eq', '/')
    cy.get('a').contains('Home').should('have.class', 'active')

    cy.get('[data-cy=burger-icon]').click()
    cy.contains('History').click()
    cy.location('pathname').should('eq', '/history')
    cy.get('a').contains('History').should('have.class', 'active')
  })

})
