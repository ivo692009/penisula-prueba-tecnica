import BasePage from '../pages/BasePage'
import ContactModal from '../pages/ContactModal';

describe('Smoke Test - Llenar formulario de contacto', () => {

  before(() => {
    BasePage.visitBasePage()
  });

  it('Visitamos la pagina principal de peninsula, vamos al formulario de contacto, llenamos los campos y verificamos que los datos persisten', () => {
    BasePage.contactanosButton().click();
    // El modal debe estar visible
    ContactModal.rootModalContainer().should('be.visible', { timeout: 10000 });
    // Ingresamos datos en los campos del formulario
    ContactModal.inputNombre().type('Juan Perez');
    ContactModal.inputEmail().type('exampletext@test.com');
    ContactModal.inputNombreCompania().type('Compañia de Prueba S.A.');
    ContactModal.inputTextAreaMensaje().type('Este es un mensaje de prueba para el formulario de contacto.');
    ContactModal.seleccionarOpcion('CTO');
    ContactModal.enviarButton().should('be.visible');
    // verificamos que los campos tengan la informacion ingresada
    ContactModal.inputNombre().should('have.value', 'Juan Perez');
    ContactModal.inputEmail().should('have.value', 'exampletext@test.com');
    ContactModal.inputNombreCompania().should('have.value', 'Compañia de Prueba S.A.');
    ContactModal.inputTextAreaMensaje().should('have.value', 'Este es un mensaje de prueba para el formulario de contacto.');
    ContactModal.selectRolCompania().should('have.value', 'cto');
    // Hacemos click en el boton enviar
    ContactModal.enviarButton().click();

  })
})