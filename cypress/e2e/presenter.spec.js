console.log('Ejecutando pruebas de presenter.spec.js');

const { agregarIngreso, ingresos } = require('../../src/ingresos'); 
const { JSDOM } = require('jsdom');

describe('presenter.js', () => {
    let document;

    beforeEach(() => {
        const dom = new JSDOM(`
            <form id="ingreso-form">
                <input type="text" id="ingreso" value="100, 200, 300" />
                <input type="date" id="fechaIngreso" value="2024-10-01" />
                <button type="submit">Agregar</button>
            </form>
        `);
        document = dom.window.document;
           
        ingresos.length = 0;

        const ingresoForm = document.getElementById('ingreso-form');
        
        const ingresoInput = document.getElementById('ingreso').value;
        const fechaInput = document.getElementById('fechaIngreso').value;

        const handleSubmit = (event) => {
            event.preventDefault(); 

            const montos = ingresoInput.split(',').map(m => parseFloat(m.trim()));
            montos.forEach(monto => {
                if (!isNaN(monto)) {
                    agregarIngreso(monto, fechaInput); 
                } else {
                    console.error('Entrada no válida:', monto); 
                }
            });
        };

        ingresoForm.addEventListener('submit', handleSubmit);
        ingresoForm.dispatchEvent(new dom.window.Event('submit')); 
    });

    test('debe agregar múltiples ingresos desde un input', () => {
        expect(ingresos.length).toBe(3);
        expect(ingresos).toEqual([
            { monto: 100, fecha: '2024-10-01' },
            { monto: 200, fecha: '2024-10-01' },
            { monto: 300, fecha: '2024-10-01' },
        ]);
    });
});
