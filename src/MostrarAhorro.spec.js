const { agregarIngreso, obtenerIngresos } = require('./ingresos.js');
const { CalcularAhorroTotal } = require('./MostrarAhorro.js');
const { agregarGasto, obtenerGastos } = require('./gastos.js');

describe('CalculoAhorroMostrar', () => {
    it('debería devolver el ahorro correcto con ingresos ', () => {
        agregarIngreso(1000, '2024-10-22');
        const resultado = CalcularAhorroTotal();
        expect(resultado).toBe(1000);  
    });
    it('debería devolver el ahorro correcto con ingresos y gastos', () => {
       
        agregarGasto(500, '2024-10-22');
        const resultado = CalcularAhorroTotal();
        expect(resultado).toBe(500);
        
    });
    
});
