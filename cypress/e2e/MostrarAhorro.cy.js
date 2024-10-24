describe('Mostrar Ahorro - Cypress Tests', () => {
    beforeEach(() => {
        cy.visit('index.html'); 

        cy.window().then((win) => {
           
            win.ingresos = [];
            win.gastos = [];
        });
    });

    it('debe calcular correctamente el ahorro total basado en ingresos y gastos', () => {
        
        const ingresos = '1000';
        const fechaIngreso = '2024-10-01';
        cy.get('#ingreso').clear().type(ingresos);
        cy.get('#fechaIngreso').clear().type(fechaIngreso);
        cy.get('#ingreso-form').submit();

       
        const gastos = '400';
        const fechaGasto = '2024-10-01';
        cy.get('#gasto').clear().type(gastos);
        cy.get('#fechaGasto').clear().type(fechaGasto);
        cy.get('#gasto-form').submit();

        
        cy.window().then((win) => {
            const ahorroEsperado = 1000 - 400;
            cy.get('#resultado-ahorro').should('contain', `Ahorro Total: $${ahorroEsperado}`);
        });
    });


    //si deberia mostrar el ahorro
    it('deberia mostrar el ahorro correcto de ingresos ', () => {
       const ingresos= '3000';
       const fechaIngreso = '2024-10-05'
       cy.get('#ingreso').clear().type(ingresos);
       cy.get('#fechaIngreso').clear().type(fechaIngreso);
       cy.get('#ingreso-form').submit();

       const gastos = '500';
        const fechaGasto = '2024-10-01';
        cy.get('#gasto').clear().type(gastos);
        cy.get('#fechaGasto').clear().type(fechaGasto);
        cy.get('#gasto-form').submit();

       cy.window().then((win) => {
        const ahorroEsperado = 3000 - 500;
        cy.get('#resultado-ahorro').should('contain', `Ahorro Total: $${ahorroEsperado}`);
    });
   
    });
});
