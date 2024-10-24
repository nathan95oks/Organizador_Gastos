const { agregarIngreso, obtenerIngresos } = require('./ingresos.js');
const { agregarGasto } = require('./gastos.js');
const { CalcularAhorroTotal } = require('./MostrarAhorro.js');

describe('CalculoAhorroMostrar', () => {
    beforeEach(() => {
        // Reseteamos los ingresos y gastos antes de cada prueba
        const ingresos = require('./ingresos.js').ingresos;
        const gastos = require('./gastos.js').gastos;
        ingresos = 0;
        gastos.length = 0;
    });

    it('debería devolver el ahorro correcto con ingresos y gastos', () => {
        // Agrega algunos ingresos y gastos
        agregarIngreso(1000, '2024-10-22');
        agregarGasto(500, '2024-10-22');

        // Se espera que el ahorro sea 500
        const resultado = CalculoAhorroMostrar();
        expect(resultado).toBe(500);  // Esta prueba fallará inicialmente
    });
});
