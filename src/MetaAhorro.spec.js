import IngresoMetaAhorro from "./MetaAhorro";

describe("Agregar Meta de Ahorro", () => {
    it("Verificar si agrega correctamente la meta y la fecha límite", () => {
        const fechaLimite = "2024-12-31";
        expect(IngresoMetaAhorro(200, fechaLimite)).toEqual({ meta: 200, fechaLimite });
    });
    
    it("Verificar si ingresa valores nulos o incorrectos", () => {
      expect(IngresoMetaAhorro("%", "2024-12-31")).toEqual(false);
      expect(IngresoMetaAhorro(200, "")).toEqual(false);  // Asegurarse de que la fecha esté presente
  });
  
});
