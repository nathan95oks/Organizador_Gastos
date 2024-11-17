    describe ("Agregar meta de ahorro",()=>{
        it ("Verificar si agrega los datos correctamente",()=>{
            cy.visit('index.html');
            const metaAhorro= '3000';
            const fecha = '2024-12-31';  
        
            cy.get("#meta").type(metaAhorro);
            cy.get("#fechaLimite").type(fecha);
            cy.get("#Meta-form").submit();
            cy.get("#meta-div").should('contain', metaAhorro);
            cy.get("#meta-div").should('contain', fecha);

        });
    });