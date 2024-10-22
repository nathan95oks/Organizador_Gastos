import ingresos from '../src/ingresos';


describe('ingresos.js - Cypress', () => {
    beforeEach(() => {
        ingresos.length = 0; 

        cy.visit('index.html'); 
    });

    it('debe agregar un ingreso correctamente desde el formulario', () => {
        const monto = 100;
        const fecha = '2024-10-01';

        cy.get('#ingreso').type(monto); 
        cy.get('#fechaIngreso').type(fecha); 
        cy.get('#ingreso-form').submit(); 

        cy.window().then((win) => {
            expect(win.ingresos.length).to.equal(1);
            expect(win.ingresos).to.deep.equal([{ monto: 100, fecha: '2024-10-01' }]);
        });
    });

    it('debe manejar entradas no válidas desde el formulario', () => {
        const monto = 'invalid'; 
        const fecha = '2024-10-01';

        cy.get('#ingreso').type(monto); 
        cy.get('#fechaIngreso').type(fecha); 
        cy.get('#ingreso-form').submit(); 

       
        cy.window().then((win) => {
            expect(win.ingresos.length).to.equal(0);
        });
    });
});
