
    describe ("Agregar meta de ahorro",()=>{
        it ("Verificar si agrega los datos correctamente",()=>{
            cy.visit('index.html');
            const metaAhorro= '3000';
        
            cy.get("#meta").type(metaAhorro);
            cy.get("#Meta-form").submit();
            cy.get("#meta-div").should('contain', metaAhorro);
        });
        it("Verificar que no permita valores vacíos o nulos", () => {
            
            cy.visit('index.html');
            const metaAhorro= '%';
            cy.get("#Meta-form").submit();
            cy.get("#meta-div").should('not.contain', metaAhorro);
            cy.on('window:alert', (str) => {
                expect(str).to.equal('Por favor, ingrese una meta de ahorro válida.');
            });
        });
        
        

    });