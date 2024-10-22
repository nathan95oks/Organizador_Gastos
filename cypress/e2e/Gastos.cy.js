import { agregarGasto, gastos } from '../../src/gastos.js';

describe('gastos.js - Cypress', () => {
    beforeEach(() => {
        gastos.length = 0; // Reiniciar gastos antes de cada prueba
        cy.visit('index.html'); 
    });

    it('debe agregar y mostrar un gasto correctamente desde el formulario', () => {
        const monto = 150;
        const fecha = '2024-10-10';

        cy.get('#gasto').type(monto);
        cy.get('#fechaGasto').type(fecha);
        cy.get('#gasto-form').submit();

        cy.get('#resultado-div p').should('have.length', 1);
        cy.get('#resultado-div p').first().should('contain', `Gasto: ${monto} - Fecha: ${fecha}`);
    });

    it('no debe agregar un gasto con entrada no válida', () => {
        cy.get('#gasto').type('invalido');
        cy.get('#fechaGasto').type('2024-10-10');
        cy.get('#gasto-form').submit();

        cy.get('#resultado-div p').should('have.length', 0); 
    });
});
