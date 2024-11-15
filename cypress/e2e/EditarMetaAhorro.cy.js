describe('Pruebas de Meta de Ahorro', () => {
    beforeEach(() => {
        cy.visit('index.html');
    });

    it('Debe mostrar la meta inicial como $0', () => {
        cy.get('#meta-div').should('contain', 'Meta de Ahorro: $0');
    });


});
