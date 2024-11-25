describe('Pruebas de Meta de Ahorro con Fecha Límite', () => {
  
    beforeEach(() => {
        cy.visit('index.html'); // Asegúrate de que este sea el archivo correcto
    });

    it('Debe mostrar la meta inicial como $0 y fecha límite como "--"', () => {
        cy.get('#meta-div').should('contain', 'Meta de Ahorro: $0 - Fecha límite: --');
    });
});




/*
it('Debe permitir agregar una nueva meta de ahorro con fecha límite', () => {
    // Agregar una nueva meta con fecha
    cy.get('#meta').type('5000');
    cy.get('#fechaLimite').type('2024-12-31');
    cy.get('#Meta-boton').click();

    // Verificar que la meta y la fecha límite se actualicen
    cy.get('#meta-div').should('contain', 'Meta de Ahorro: $5000 - Fecha límite: 2024-12-31');
});

it('Debe permitir editar la meta de ahorro y la fecha límite', () => {
    // Editar meta de ahorro y fecha límite
    cy.get('#editar-meta').type('10000');
    cy.get('#editar-fechaLimite').type('2025-01-15');
    cy.get('input[value="Editar Meta"]').click();

    // Verificar que los valores se actualicen en el display principal
    cy.get('#meta-div').should('contain', 'Meta de Ahorro: $10000 - Fecha límite: 2025-01-15');
});

it('Debe mostrar un error si se intenta agregar una meta sin completar campos', () => {
    // Dejar el campo de meta vacío
    cy.get('#fechaLimite').type('2024-12-31');
    cy.get('#Meta-boton').click();

    // Verificar notificación o manejo de error (en este caso asumiendo notificación en #notificaciones)
    cy.get('#notificaciones').should('contain', 'Por favor ingrese una meta válida.');

    // Dejar el campo de fecha vacío
    cy.get('#meta').type('5000');
    cy.get('#fechaLimite').clear();
    cy.get('#Meta-boton').click();

    // Verificar notificación
    cy.get('#notificaciones').should('contain', 'Por favor ingrese una fecha válida.');
});
*/







    