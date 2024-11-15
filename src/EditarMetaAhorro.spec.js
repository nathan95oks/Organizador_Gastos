import editar from "./EditarMetaAhorro";

describe("Editar la meta de Ahorro ",()=>{
   it("Deberia editar la meta si el valo es valido ",()=>{
        expect(editar(200)).toEqual(200);
   });
   it("Deberia devolver false  si el valor es invalido valor negativo ",()=>{
    expect(editar(-100)).toEqual(false);
   });
   it("Debería devolver false si el valor es inválido (no es un número)", () => {
    let resultado = editar("abc");
    expect(resultado).toEqual(false);
    });
});