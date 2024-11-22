import { editarMetaAhorro, setEspacio } from './EditarMetaAhorro'; // Asegúrate de que la ruta sea correcta

describe("Editar la meta de ahorro", () => {
    beforeEach(() => {
        // Configurar un espacio inicial para cada prueba
        setEspacio([{ meta: 100, fecha: new Date().toISOString() }]);
    });

    it("Debería editar la meta si el valor es válido", () => {
        const resultado = editarMetaAhorro(200);  // Llamada correcta a la función
        expect(resultado.meta).toEqual(200);
        expect(new Date(resultado.fecha).toISOString()).toEqual(resultado.fecha); 
    });

    it("Debería devolver false si el valor es inválido (valor negativo)", () => {
        expect(editarMetaAhorro(-100)).toEqual(false);
    });

    it("Debería devolver false si el valor es inválido (no es un número)", () => {
        expect(editarMetaAhorro("abc")).toEqual(false);
    });

    it("Debería actualizar la fecha al editar nuevamente", (done) => {
     const primeraEdicion = editarMetaAhorro(300);
     setTimeout(() => {
         const segundaEdicion = editarMetaAhorro(500);
         expect(segundaEdicion.meta).toEqual(500);
         expect(primeraEdicion.fecha).not.toEqual(segundaEdicion.fecha);
         done();
     }, 10); // Retardo de 10 ms para asegurar que las fechas sean distintas
 });
 

    it("Debería devolver false si espacio está vacío", () => {
        setEspacio([]); // Reiniciar espacio a vacío
        expect(editarMetaAhorro(200)).toEqual(false);
    });
});