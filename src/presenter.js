let ingresos = [];
let gastos = [];

const agregarIngreso = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        ingresos.push({ monto, fecha });
    }
};

const getIngresos = () => {
    return ingresos;
};

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


const agregarGasto = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        gastos.push({ monto, fecha });
    }
};

const mostrarGastos = () => {
    const resultadoDiv = document.getElementById('resultado-div');
    resultadoDiv.innerHTML = ''; // Limpiar contenido anterior

    gastos.forEach((gasto) => {
        const p = document.createElement('p');
        p.textContent = `Gasto: ${gasto.monto} - Fecha: ${gasto.fecha}`;
        resultadoDiv.appendChild(p);
    });
};

document.getElementById('gasto-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const monto = parseFloat(document.getElementById('gasto').value);
    const fecha = document.getElementById('fechaGasto').value;

    agregarGasto(monto, fecha);
    mostrarGastos();
});

module.exports = { agregarIngreso, getIngresos, ingresos };
module.exports = { agregarGasto, mostrarGastos, gastos };
