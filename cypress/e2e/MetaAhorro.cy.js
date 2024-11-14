
describe ("Agregar meta de ahorro",()=>{
    it ("Verificar si agrega los datos correctamente",()=>{
        cy.visit('index.html');
        cy.get("#meta").type("200");
        cy.get("#Meta-form").submit();
        cy.get("#meta-div").should("contain", "200");
    });

    


});