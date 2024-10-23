describe('Gastos - Cypress Tests', () => {
    beforeEach(() => {
        cy.visit('index.html');

        cy.window().then((win) => {
            win.gastos.length = 0;
        });
    });

    it('debe agregar gastos correctamente desde el formulario', () => {
        const monto = '50, 75, 100';
        const fecha = '2024-10-02';

        cy.get('#gasto').clear().type(monto);
        cy.get('#fechaGasto').clear().type(fecha);
        cy.get('#gasto-form').submit();

        cy.window().then((win) => {
            expect(win.gastos.length).to.equal(3);
            expect(win.gastos).to.deep.equal([
                { monto: 50, fecha: '2024-10-02' },
                { monto: 75, fecha: '2024-10-02' },
                { monto: 100, fecha: '2024-10-02' },
            ]);
        });
    });

    it('debe manejar entradas no válidas en el formulario', () => {
        cy.get('#gasto').clear().type('invalid');
        cy.get('#fechaGasto').clear().type('2024-10-02');
        cy.get('#gasto-form').submit();

        cy.window().then((win) => {
            expect(win.gastos.length).to.equal(0);
        });
    });
});
