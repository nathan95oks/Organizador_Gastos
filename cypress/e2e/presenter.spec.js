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
    });

    it('debe agregar múltiples ingresos correctamente desde el input', () => {
        const form = document.getElementById('ingreso-form');
        const ingresoInput = document.getElementById('ingreso');
        const fechaInput = document.getElementById('fechaIngreso');
        
        const montos = ingresoInput.value.split(',').map(m => parseFloat(m.trim()));
        montos.forEach(monto => {
            if (!isNaN(monto)) {
                agregarIngreso(monto, fechaInput.value);
            }
        });

        expect(ingresos.length).toBe(3);
        expect(ingresos).toEqual([
            { monto: 100, fecha: '2024-10-01' },
            { monto: 200, fecha: '2024-10-01' },
            { monto: 300, fecha: '2024-10-01' },
        ]);
    });

    it('debe manejar correctamente entradas no válidas', () => {
        agregarIngreso('invalid', '2024-10-01');

        expect(ingresos.length).toBe(0);
    });
});