console.log('Ejecutando pruebas de ingresos.spec.js'); 

const { agregarIngreso, ingresos } = require('./ingresos');

beforeEach(()=>{
 ingresos.length =0;
});

test('debe agregar un ingreso al array', () => {
   

    const monto = 100;
    const fecha = '2024-10-01';
    const ingreso = agregarIngreso(monto, fecha);

    expect(ingreso).toEqual({ monto, fecha });
    expect(ingresos.length).toBe(1);
    expect(ingresos[0]).toEqual({ monto, fecha });
});



test('debe agregar multiples ingresos al array',()=>{
     const ingreso1 = agregarIngreso(100,'2024-10-01');
     const ingreso2 = agregarIngreso(300,'2024-10-08');
     const ingreso3 = agregarIngreso(800,'2024-10-02');
     expect(ingresos.length).toBe(3);
     expect(ingresos).toEqual([
        {monto:100 ,fecha:'2024-10-01'},
        {monto:300 ,fecha:'2024-10-08'},
        {monto:800 ,fecha:'2024-10-02'},

     ]);

});


test('no debe permitir ingresos duplicados', () => {
    const ingreso1 = agregarIngreso(100, '2024-10-01');
    const ingreso2 = agregarIngreso(100, '2024-10-01'); 

    expect(ingreso1).toEqual({ monto: 100, fecha: '2024-10-01' });
    expect(ingreso2).toBe(null); 
    expect(ingresos.length).toBe(1); 
});

test('test de ejemplo', () => {
    expect(true).toBe(true);
});
