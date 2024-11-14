
describe ("Agregar meta de ahorro",()=>{
    it ("Verificar si agrega los datos correctamente",()=>{
        cy.visit('index.html');
        cy.get("#meta").type("200");
        cy.get("#Meta-form").submit();
        cy.get("#meta-div").should("contain", "200");
    });
    it("Verificar que no permita valores vacíos o nulos", () => {
        cy.visit('index.html');
        cy.get("#Meta-form").submit();
        cy.get("#meta-div").should("not.contain", "%");
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Por favor, ingrese una meta de ahorro válida.');
        });
    });
    
    

});