const { agregarGasto, gastos } = require('./gastos');

describe('gastos.js', () => {
    beforeEach(() => {
        gastos.length = 0; // Limpia la lista antes de cada prueba
    });

    it('debe agregar un gasto correctamente', () => {
        const monto = 50;
        const fecha = '2024-10-02';

        agregarGasto(monto, fecha);

        expect(gastos.length).toBe(1);
        expect(gastos).toEqual([{ monto: 50, fecha: '2024-10-02' }]);
    });

    it('debe manejar entradas no válidas', () => {
        agregarGasto('invalid', '2024-10-02');

        expect(gastos.length).toBe(0);
    });
});
