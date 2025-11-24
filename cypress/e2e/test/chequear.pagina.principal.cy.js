import BasePage from '../pages/BasePage'

describe('Smoke Test - Ver pagina principal', () => {

  before(() => {
    BasePage.visitBasePage()
  });

  it('Visitamos la pagina principal de peninsula, y verificamos la URL y que cargue adecuadamente', () => {
    // Validamos la URL y que los elementos principales esten visibles
    cy.url().should('include', 'landing.peninsula.co')
    BasePage.aceleraTuCarreraButton().should('be.visible', { timeout: 10000 })
    BasePage.aceleraTuCompaniaButton().should('be.visible', { timeout: 10000 })
    BasePage.landingModalDivTexts().should('be.visible', { timeout: 10000 })
    BasePage.landingModalDivFirstText().should('include.text', 'Future is about')
  })
})