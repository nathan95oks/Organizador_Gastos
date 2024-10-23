const { agregarGasto, gastos } = require('./gastos');
const { getGastoTotal } = require('./gastosTotal'); 

describe('gastosTotal.js', () => {
    beforeEach(() => {
        gastos.length = 0;  // Vacía el array de gastos antes de cada prueba
    });

    it('debe calcular correctamente el total de los gastos', () => {
        agregarGasto(50, '2024-10-01');
        agregarGasto(100, '2024-10-02');

        const total = getGastoTotal();  // Calcula el total de los gastos

        expect(total).toBe(150);  // Verifica que el total sea correcto
    });

    it('debe devolver 0 si no hay gastos', () => {  // Corregido: el punto `.` removido
        const total = getGastoTotal();

        expect(total).toBe(0);  // Verifica que el total sea 0 si no hay gastos
    });
});