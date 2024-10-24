const { agregarIngreso, obtenerIngresos } = require('./ingresos.js');
const { CalcularAhorroTotal } = require('./MostrarAhorro.js');

describe('CalculoAhorroMostrar', () => {
    it('debería devolver el ahorro correcto con ingresos y gastos', () => {
        agregarIngreso(1000, '2024-10-22');
        const resultado = CalcularAhorroTotal();
        expect(resultado).toBe(1000);  // Esta prueba fallará inicialmente
    });
});
