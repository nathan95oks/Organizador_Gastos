describe('Ingresos - Cypress Tests', () => {
    beforeEach(() => {
        cy.visit('index.html'); // Abre la página

        // Reinicia la lista de ingresos en la ventana de prueba
        cy.window().then((win) => {
            win.ingresos.length = 0;
        });
    });

    it('debe agregar ingresos correctamente desde el formulario', () => {
        const monto = '100, 200, 300';
        const fecha = '2024-10-01';

        // Verifica que los elementos del formulario existen
        cy.get('#ingreso').should('exist').clear().type(monto);
        cy.get('#fechaIngreso').should('exist').clear().type(fecha);
        cy.get('#ingreso-form').submit();

        // Verifica que los ingresos se agregaron correctamente
        cy.window().then((win) => {
            expect(win.ingresos.length).to.equal(3);
            expect(win.ingresos).to.deep.equal([
                { monto: 100, fecha: '2024-10-01' },
                { monto: 200, fecha: '2024-10-01' },
                { monto: 300, fecha: '2024-10-01' },
            ]);
        });
    });

    it('debe manejar entradas no válidas en el formulario', () => {
        const monto = 'invalid'; // Monto no válido
        const fecha = '2024-10-01';

        cy.get('#ingreso').should('exist').clear().type(monto);
        cy.get('#fechaIngreso').should('exist').clear().type(fecha);
        cy.get('#ingreso-form').submit();

        // Verifica que no se agregó ningún ingreso
        cy.window().then((win) => {
            expect(win.ingresos.length).to.equal(0);
        });
    });

    it('debe manejar fechas no válidas en el formulario', () => {
        const monto = '100, 200';
        const fecha = ''; // Fecha vacía

        cy.get('#ingreso').should('exist').clear().type(monto);

        // Valida que el campo #fechaIngreso está vacío antes de enviar
        cy.get('#fechaIngreso').should('exist').clear();
        cy.get('#fechaIngreso').should('have.value', ''); // Confirma que está vacío
        cy.get('#ingreso-form').submit();

        // Verifica que no se agregó ningún ingreso
        cy.window().then((win) => {
            expect(win.ingresos.length).to.equal(0);
        });
    });

    it('debe manejar ambos campos vacíos en el formulario', () => {
        const monto = ''; // Campo vacío
        const fecha = ''; // Campo vacío

        cy.get('#ingreso').should('exist').clear();
        cy.get('#fechaIngreso').should('exist').clear();
        cy.get('#ingreso-form').submit();

        // Verifica que no se agregó ningún ingreso
        cy.window().then((win) => {
            expect(win.ingresos.length).to.equal(0);
        });
    });
});