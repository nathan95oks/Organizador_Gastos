const { agregarIngreso, obtenerIngresos } = require('./ingresos.js');

describe('ingresos.js', () => {
    beforeEach(() => {
        const ingresos = obtenerIngresos();
        ingresos.length = 0;  // Resetea la lista de ingresos
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
        agregarIngreso('invalid', '2024-10-01');

        const ingresos = obtenerIngresos();
        expect(ingresos.length).toBe(0);
    });
});

