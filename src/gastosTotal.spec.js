const { agregarGasto, gastos } = require('./gastos');
const { getGastoTotal } = require('./gastosTotal'); 

describe('gastosTotal.js', () => {
    beforeEach(() => {
        gastos.length = 0;  
    });

    it('debe calcular correctamente el total de los gastos', () => {
        agregarGasto(50, '2024-10-01');
        agregarGasto(100, '2024-10-02');

        const total = getGastoTotal();  

        expect(total).toBe(150);  
    });

    it('debe devolver 0 si no hay gastos', () => { 
        const total = getGastoTotal();

        expect(total).toBe(0);  
    });
});