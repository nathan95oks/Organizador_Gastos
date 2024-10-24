describe('Gestión de Gastos y Total de Gastos', () => {

    beforeEach(() => {
      cy.visit('/');
    }); 
    it('Debe agregar un gasto y mostrarlo en la lista de gastos', () => {  
      cy.get('#gasto').type('100');
      cy.get('#fechaGasto').type('2024-10-23');  
      cy.get('#gasto-form').submit(); 
      cy.get('#resultado-gastos')
        .should('contain', 'Monto: $100 - Fecha: 2024-10-23');
    });
    it('Debe calcular el total de los gastos correctamente', () => { 
        cy.get('#gasto').type('100');
        cy.get('#fechaGasto').type('2024-10-23');
        cy.get('#gasto-form').submit();
        cy.get('#gasto').type('200');
        cy.get('#fechaGasto').type('2024-10-23');
        cy.get('#gasto-form').submit();
        cy.get('#total-gastos').should('contain', 'Total de Gastos: $300');
      });
      it('Debe mostrar un mensaje si no hay gastos registrados', () => {
        localStorage.removeItem('gastos');
        cy.reload();
        cy.get('#resultado-gastos', { timeout: 10000 }).should('contain', 'No hay gastos registrados');
        cy.get('#total-gastos', { timeout: 10000 }).should('contain', 'Total de Gastos: $0');
      });
  });
  