describe('Ingresos - Cypress Tests', () => {
    beforeEach(() => {
        cy.visit('index.html'); 

        cy.window().then((win) => {
            win.ingresos.length = 0; 
        });
    });

    it('debe agregar ingresos correctamente desde el formulario', () => {
        const monto = '100, 200, 300'; 
        const fecha = '2024-10-01'; 

        cy.get('#ingreso').clear().type(monto);
        cy.get('#fechaIngreso').clear().type(fecha);
        cy.get('#ingreso-form').submit();

        cy.window().then((win) => {
            expect(win.ingresos.length).to.equal(3);
            expect(win.ingresos).to.deep.equal([
                { monto: 100, fecha: '2024-10-01' },
                { monto: 200, fecha: '2024-10-01' },
                { monto: 300, fecha: '2024-10-01' }
            ]);
        });
    });

    it('debe manejar entradas no válidas en el formulario', () => {
        const monto = 'invalid';
        const fecha = '2024-10-01';

        cy.get('#ingreso').clear().type(monto);
        cy.get('#fechaIngreso').clear().type(fecha);
        cy.get('#ingreso-form').submit();

        cy.window().then((win) => {
            expect(win.ingresos.length).to.equal(0);
        });
    });
});