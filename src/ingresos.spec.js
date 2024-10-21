console.log('Ejecutando pruebas de ingresos.spec.js'); 

const { agregarIngreso, ingresos } = require('./ingresos');

test('debe agregar un ingreso al array', () => {
    ingresos.length = 0; 

    const monto = 100;
    const fecha = '2024-10-01';
    const ingreso = agregarIngreso(monto, fecha);

    expect(ingreso).toEqual({ monto, fecha });
    expect(ingresos.length).toBe(1);
    expect(ingresos[0]).toEqual({ monto, fecha });
});

test('test de ejemplo', () => {
    expect(true).toBe(true);
});
