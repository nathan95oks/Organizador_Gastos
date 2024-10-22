const { agregarGasto, gastos } = require('./gastos');

describe('gastos.js', () => {
    beforeEach(() => {
        gastos.length = 0; // Reiniciar la lista de gastos antes de cada prueba
    });

    it('debe agregar un gasto correctamente', () => {
        const monto = 200;
        const fecha = '2024-10-15';

        agregarGasto(monto, fecha);

        expect(gastos.length).toBe(1);
        expect(gastos).toEqual([{ monto: 200, fecha: '2024-10-15' }]);
    });

    it('no debe agregar un gasto con entrada no válida', () => {
        agregarGasto('invalido', '2024-10-15');
        expect(gastos.length).toBe(0);
    });
});
