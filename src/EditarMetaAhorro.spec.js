import editar from "./EditarMetaAhorro";

describe("Editar la meta de Ahorro ",()=>{
   it("Deberia editar la meta si el valo es valido ",()=>{
        expect(editar(200)).toEqual(200);
   });

});