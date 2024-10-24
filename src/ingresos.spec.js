const { agregarIngreso, ingresos } =  require('./ingresos');

describe('ingresos.js', () => {
    beforeEach(() => {
        ingresos.length = 0;
    });

    it('debe agregar un ingreso correctamente', () => {
        const monto = 100;
        const fecha = '2024-10-01';

        agregarIngreso(monto, fecha);

        expect(ingresos.length).toBe(1);
        expect(ingresos).toEqual([{ monto: 100, fecha: '2024-10-01' }]);
    });
//si funca
    it('debe manejar entradas no válidas', () => {
        const monto = 'invalid'; 
        const fecha = '2024-10-01';

        agregarIngreso(monto, fecha);
        
        expect(ingresos.length).toBe(0);
    });
});
