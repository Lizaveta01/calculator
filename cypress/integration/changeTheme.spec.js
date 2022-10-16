import chaiColors from 'chai-colors'
chai.use(chaiColors)

describe('Change theme', () => {
  it('should have a switch theme container and have default light theme', () => {
    cy.visit('/settings')
    cy.get('[data-cy=selected-theme]').contains(
      'Light theme',
    )
    cy.get('[data-cy=selected-theme]').click()

    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .should('have.length', 3)

    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .contains('Dark theme')
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .contains('Colored theme')
    cy.get('[data-cy=selected-theme]').click()
  })

  it('should have a dark theme redux store', () => {
    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .contains('Dark theme')
      .click()

    cy.window()
      .its('store')
      .invoke('getState')
      .its('theme')
      .its('colors')
      .should('deep.equal', {
        WHITE: '#ffffff',
        BODY_HEADFONT: '#4b4b4b',
        PRIMARY_HEADER_NUMBER: '#ffffff',
        SECONDARY_NO_ACTIVE_LINK_BORDER: '#a6a6a6',
        SECONDARY_LIGHT_BUTTOM: '#bcbcbc',
        HOVER_BUTTON_TEXT: '#4b4b4b',
        HOVER_BUTTON_BACKGROUND: '#ffffff',
        HOVER_BUTTON_SHADOW: '#c6ccd2',
      })
  })

  it('should have a light theme redux store', () => {
    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .contains('Light theme')
      .click()

    cy.window()
      .its('store')
      .invoke('getState')
      .its('theme')
      .its('colors')
      .should('deep.equal', {
        WHITE: '#ffffff',
        BODY_HEADFONT: '#ffffff',
        PRIMARY_HEADER_NUMBER: '#4b4b4b',
        SECONDARY_NO_ACTIVE_LINK_BORDER: '#bcbcbc',
        SECONDARY_LIGHT_BUTTOM: '#eeeeee',
        HOVER_BUTTON_TEXT: '#4b4b4b',
        HOVER_BUTTON_BACKGROUND: '#ffffff',
        HOVER_BUTTON_SHADOW: '#c6ccd2',
      })
  })

  it('should have a colored theme redux store', () => {
    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .contains('Colored theme')
      .click()

    cy.window()
      .its('store')
      .invoke('getState')
      .its('theme')
      .its('colors')
      .should('deep.equal', {
        WHITE: '#ffffff',
        BODY_HEADFONT: '#f7b1c5',
        PRIMARY_HEADER_NUMBER: '#6c5b7b',
        SECONDARY_NO_ACTIVE_LINK_BORDER: '#e6e6e6',
        SECONDARY_LIGHT_BUTTOM: '#eeeeee',
        HOVER_BUTTON_TEXT: '#4b4b4b',
        HOVER_BUTTON_BACKGROUND: '#ffffff',
        HOVER_BUTTON_SHADOW: '#a46dae',
      })
  })

  it('should have a dark theme', () => {
    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .contains('Dark theme')
      .click()

    cy.get('[data-cy=history-clean-items]')
      .should('have.css', 'color')
      .and('be.colored', '#ffffff')
    cy.get('[data-cy=history-clean-items]')
      .should('have.css', 'background-color')
      .and('be.colored', '#bcbcbc')
    cy.get('h1')
      .should('have.css', 'color')
      .and('be.colored', '#ffffff')
    cy.get('[data-cy=settings-wrapper]')
      .find('p')
      .should('have.css', 'color')
      .and('be.colored', '#ffffff')

    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .should('have.css', 'color')
      .and('be.colored', '#ffffff')
    cy.get('[data-cy=option-theme-container]')
      .get('li:nth-child(2)')
      .should('have.css', 'border-top-color')
      .and('be.colored', '#a6a6a6')
    cy.get('[data-cy=option-theme-container]')
      .get('li:nth-child(2)')
      .should('have.css', 'border-bottom-color')
      .and('be.colored', '#a6a6a6')

    cy.contains('Home').click()

    cy.get('[data-cy=header-wrapper]')
      .should('have.css', 'background-color')
      .and('be.colored', '#ffffff')
    cy.get('[data-cy=header-wrapper]')
      .get('p')
      .should('have.css', 'color')
      .and('be.colored', '#4b4b4b')
    cy.get('[data-cy=header-wrapper]')
      .get('a')
      .get('.active')
      .should('have.css', 'color')
      .and('be.colored', '#000000')
    cy.get('[data-cy=header-wrapper]')
      .get('a[href*="/settings"]')
      .should('have.css', 'color')
      .and('be.colored', '#a6a6a6')

    cy.get('[data-cy=app-wrapper]')
      .should('have.css', 'background-color')
      .and('be.colored', '#4b4b4b')

    cy.get('[data-cy=history-wrapper]')
      .should('have.css', 'border-left-color')
      .and('be.colored', '#a6a6a6')
    cy.get('[data-cy=history-wrapper] > p')
      .should('have.css', 'color')
      .and('be.colored', '#ffffff')

    cy.get('[data-cy=display-value]')
      .should('have.css', 'color')
      .and('be.colored', '#ffffff')
    cy.get('[data-cy=display-wrapper]')
      .should('have.css', 'border-bottom-color')
      .and('be.colored', '#a6a6a6')

    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'color')
      .and('be.colored', '#ffffff')
    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'background-color')
      .and('be.colored', '#bcbcbc')
    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'border-left-color')
      .and('be.colored', '#a6a6a6')

    cy.contains('Settings').click()
  })

  it('should have a light theme', () => {
    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .contains('Light theme')
      .click()

    cy.get('[data-cy=history-clean-items]')
      .should('have.css', 'color')
      .and('be.colored', '#4b4b4b')
    cy.get('[data-cy=history-clean-items]')
      .should('have.css', 'background-color')
      .and('be.colored', '#eeeeee')
    cy.get('h1')
      .should('have.css', 'color')
      .and('be.colored', '#4b4b4b')
    cy.get('[data-cy=settings-wrapper]')
      .find('p')
      .should('have.css', 'color')
      .and('be.colored', '#4b4b4b')

    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .should('have.css', 'color')
      .and('be.colored', '#4b4b4b')
    cy.get('[data-cy=option-theme-container]')
      .get('li:nth-child(2)')
      .should('have.css', 'border-top-color')
      .and('be.colored', '#bcbcbc')
    cy.get('[data-cy=option-theme-container]')
      .get('li:nth-child(2)')
      .should('have.css', 'border-bottom-color')
      .and('be.colored', '#bcbcbc')

    cy.contains('Home').click()

    cy.get('[data-cy=header-wrapper]')
      .should('have.css', 'background-color')
      .and('be.colored', '#4b4b4b')
    cy.get('[data-cy=header-wrapper]')
      .get('p')
      .should('have.css', 'color')
      .and('be.colored', '#ffffff')
    cy.get('[data-cy=header-wrapper]')
      .get('a')
      .get('.active')
      .should('have.css', 'color')
      .and('be.colored', '#000000')
    cy.get('[data-cy=header-wrapper]')
      .get('a[href*="/settings"]')
      .should('have.css', 'color')
      .and('be.colored', '#bcbcbc')

    cy.get('[data-cy=app-wrapper]')
      .should('have.css', 'background-color')
      .and('be.colored', '#ffffff')

    cy.get('[data-cy=history-wrapper]')
      .should('have.css', 'border-left-color')
      .and('be.colored', '#bcbcbc')
    cy.get('[data-cy=history-wrapper] > p')
      .should('have.css', 'color')
      .and('be.colored', '#4b4b4b')

    cy.get('[data-cy=display-value]')
      .should('have.css', 'color')
      .and('be.colored', '#4b4b4b')
    cy.get('[data-cy=display-wrapper]')
      .should('have.css', 'border-bottom-color')
      .and('be.colored', '#bcbcbc')

    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'color')
      .and('be.colored', '#4b4b4b')
    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'background-color')
      .and('be.colored', '#eeeeee')
    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'border-left-color')
      .and('be.colored', '#bcbcbc')

    cy.contains('Settings').click()
  })

  it('should have a colored theme', () => {
    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .contains('Colored theme')
      .click()

    cy.get('[data-cy=history-clean-items]')
      .should('have.css', 'color')
      .and('be.colored', '#6c5b7b')
    cy.get('[data-cy=history-clean-items]')
      .should('have.css', 'background-color')
      .and('be.colored', '#eeeeee')
    cy.get('h1')
      .should('have.css', 'color')
      .and('be.colored', '#6c5b7b')
    cy.get('[data-cy=settings-wrapper]')
      .find('p')
      .should('have.css', 'color')
      .and('be.colored', '#6c5b7b')

    cy.get('[data-cy=selected-theme]').click()
    cy.get('[data-cy=option-theme-container]')
      .get('li')
      .should('have.css', 'color')
      .and('be.colored', '#6c5b7b')
    cy.get('[data-cy=option-theme-container]')
      .get('li:nth-child(2)')
      .should('have.css', 'border-top-color')
      .and('be.colored', '#e6e6e6')
    cy.get('[data-cy=option-theme-container]')
      .get('li:nth-child(2)')
      .should('have.css', 'border-bottom-color')
      .and('be.colored', '#e6e6e6')

    cy.contains('Home').click()

    cy.get('[data-cy=header-wrapper]')
      .should('have.css', 'background-color')
      .and('be.colored', '#6c5b7b')
    cy.get('[data-cy=header-wrapper]')
      .get('p')
      .should('have.css', 'color')
      .and('be.colored', '#f7b1c5')
    cy.get('[data-cy=header-wrapper]')
      .get('a')
      .get('.active')
      .should('have.css', 'color')
      .and('be.colored', '#000000')
    cy.get('[data-cy=header-wrapper]')
      .get('a[href*="/settings"]')
      .should('have.css', 'color')
      .and('be.colored', '#e6e6e6')

    cy.get('[data-cy=app-wrapper]')
      .should('have.css', 'background-color')
      .and('be.colored', '#f7b1c5')

    cy.get('[data-cy=history-wrapper]')
      .should('have.css', 'border-left-color')
      .and('be.colored', '#e6e6e6')
    cy.get('[data-cy=history-wrapper] > p')
      .should('have.css', 'color')
      .and('be.colored', '#6c5b7b')

    cy.get('[data-cy=display-value]')
      .should('have.css', 'color')
      .and('be.colored', '#6c5b7b')
    cy.get('[data-cy=display-wrapper]')
      .should('have.css', 'border-bottom-color')
      .and('be.colored', '#e6e6e6')

    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'color')
      .and('be.colored', '#6c5b7b')
    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'background-color')
      .and('be.colored', '#eeeeee')
    cy.get('[data-cy=keypad-wrapper]')
      .get('button')
      .should('have.css', 'border-left-color')
      .and('be.colored', '#e6e6e6')

    cy.contains('Settings').click()
  })
})
