describe('Gestión de Gastos y Total de Gastos', () => {

    beforeEach(() => {
      // Visita la página antes de cada prueba
      cy.visit('/');
    });
  
    it('Debe agregar un gasto y mostrarlo en la lista de gastos', () => {
      // Ingresa un monto de gasto
      cy.get('#gasto').type('100');
  
      // Selecciona una fecha
      cy.get('#fechaGasto').type('2024-10-23');
  
      // Envía el formulario de gastos
      cy.get('#gasto-form').submit();
  
      // Verifica que el gasto se haya agregado correctamente
      cy.get('#resultado-gastos')
        .should('contain', 'Monto: $100 - Fecha: 2024-10-23');
    });
  
    
    
  });
  