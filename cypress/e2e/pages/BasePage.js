import UrlPage  from '../pages/UrlPage'

class BasePage {
  elements = {
    landingModalDivTexts: () => cy.get('div[class*="transition-all"] h1'),
    landingModalDivFirstText: () => cy.get('div[class*="transition-all"] h1 span[class="font-extralight"]'),
    aceleraTuCarreraButton: () => cy.xpath("//a[@href='/career']//button[normalize-space()='Acelera tu carrera']"),
    aceleraTuCompaniaButton: () => cy.xpath("//a[@href='/industria']//button[normalize-space()='Acelera tu compañia']"),
    contactanosButton: () => cy.xpath("//button[contains(normalize-space(), 'Contáctanos')]"),
  }

  visitBasePage() {
    cy.visit(UrlPage.basePage, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
  });
  }

  aceleraTuCarreraButton() {
    return this.elements.aceleraTuCarreraButton();
  }
  aceleraTuCompaniaButton() {
    return this.elements.aceleraTuCompaniaButton();
  }
  landingModalDivTexts() {
    return this.elements.landingModalDivTexts();
  }
  landingModalDivFirstText() {
    return this.elements.landingModalDivFirstText();
  }
  contactanosButton() {
    return this.elements.contactanosButton();
  }

}

export default new BasePage()