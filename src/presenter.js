const { agregarIngreso } = require('./ingresos'); 

const ingresoForm = document.getElementById('ingreso-form');

ingresoForm.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const inputMontos = document.getElementById('ingreso').value;
    const fecha = document.getElementById('fechaIngreso').value;

    const montos = inputMontos.split(',').map(m => parseFloat(m.trim()));

    montos.forEach(monto => {
        if (!isNaN(monto)) {
            agregarIngreso(monto, fecha); 
        } else {
            console.error('Entrada no válida:', monto); 
        }
    });
});

module.exports = { agregarIngreso };
