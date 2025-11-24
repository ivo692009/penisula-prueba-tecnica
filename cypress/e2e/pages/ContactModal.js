class ContactModal {
    elements = {
        rootModalContainer: () => cy.get('div[class^="relative"] div[class^="relative w-full"]'),
        inputNombre: () => this.elements.rootModalContainer().find('input[placeholder="Ingresa tu nombre"]'),
        inputEmail: () => this.elements.rootModalContainer().find('input[placeholder="Ingresa tu correo"]'),
        inputNombreCompania: () => this.elements.rootModalContainer().find('input[placeholder="Ingresa el nombre de tu compañía"]'),
        inputTextAreaMensaje: () => this.elements.rootModalContainer().find('textarea'),
        selectRolCompania: () => this.elements.rootModalContainer().find('select'),
        enviarButton: () => this.elements.rootModalContainer().find('button span'),
    }

    rootModalContainer() {
        return this.elements.rootModalContainer();
    }
    inputNombre() {
        return this.elements.inputNombre();
    }
    inputEmail() {
        return this.elements.inputEmail();
    }
    inputNombreCompania() {
        return this.elements.inputNombreCompania();
    }
    inputTextAreaMensaje() {
        return this.elements.inputTextAreaMensaje();
    }
    selectRolCompania() {
        return this.elements.selectRolCompania();
    }

    seleccionarOpcion(nombreOpcion) {
        this.elements.selectRolCompania().select(nombreOpcion);
    }
    enviarButton() {
        return this.elements.enviarButton();
    }

}

export default new ContactModal()