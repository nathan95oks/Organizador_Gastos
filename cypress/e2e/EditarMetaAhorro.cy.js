describe('Pruebas de Meta de Ahorro', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('Debe mostrar la meta inicial como $0', () => {
        cy.get('#meta-div').should('contain', 'Meta de Ahorro: $0');
    });
    it('Debe permitir agregar una nueva meta de ahorro', () => {
        // Agregar una nueva meta
        cy.get('#meta').type('5000');
        cy.get('#Meta-boton').click();

        // Verificar que la meta haya sido actualizada
        cy.get('#meta-div').should('contain', 'Meta de Ahorro: $5000');
    });

});
