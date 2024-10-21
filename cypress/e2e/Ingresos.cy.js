describe("Ingresos",()=>{
    it("Deberia mostrar los ingresos",()=>{
        cy.visit("/");
        cy.get("#ingreso").type(20);
        cy.get("#fechaIngreso").type("2020-05-02");
    });
});