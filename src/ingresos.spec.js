const { agregarIngreso, obtenerIngresos } = require('./ingresos.js');

describe('ingresos.js', () => {
    beforeEach(() => {
        // Limpiar los ingresos antes de cada prueba
        while (obtenerIngresos().length > 0) {
            obtenerIngresos().pop();
        }
    });

    it('debe agregar un ingreso correctamente', () => {
        const monto = 100;
        const fecha = '2024-10-01';

        agregarIngreso(monto, fecha);

        const ingresos = obtenerIngresos();
        expect(ingresos.length).toBe(1);
        expect(ingresos).toEqual([{ monto: 100, fecha: '2024-10-01' }]);
    });

    it('debe manejar entradas no válidas', () => {
        const monto = 'invalid'; 
        const fecha = '2024-10-01';

        agregarIngreso(monto, fecha);
        
        const ingresos = obtenerIngresos();
        expect(ingresos.length).toBe(0);
    });
});
