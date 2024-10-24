let ingresos = [];
let gastos = [];

// Función para agregar ingresos
const agregarIngreso = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        ingresos.push({ monto, fecha });
        mostrarIngresos();
        guardarIngresos();  
    }
};

// Obtener ingresos
const getIngresos = () => {
    return ingresos;
};

// Mostrar los ingresos
const mostrarIngresos = () => {
    const resultadoDiv = document.getElementById('resultado-ingresos');
    resultadoDiv.innerHTML = '';

    if (ingresos.length === 0) {
        resultadoDiv.innerHTML = '<p>No hay ingresos registrados</p>';
    } else {
        const lista = document.createElement('ul');
        ingresos.forEach(ingreso => {
            const listItem = document.createElement('li');
            listItem.textContent = `Monto: $${ingreso.monto} - Fecha: ${ingreso.fecha}`;
            lista.appendChild(listItem);
        });
        resultadoDiv.appendChild(lista);
    }
};

// Cargar ingresos desde localStorage
const cargarIngresos = () => {
    const datosGuardados = localStorage.getItem('ingresos');
    if (datosGuardados) {
        ingresos = JSON.parse(datosGuardados);
        mostrarIngresos(); 
    }
};

// Guardar ingresos en localStorage
const guardarIngresos = () => {
    localStorage.setItem('ingresos', JSON.stringify(ingresos));
};

// Manejar el formulario de ingresos
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

    document.getElementById('ingreso').value = '';
    document.getElementById('fechaIngreso').value = '';
});

// Función para agregar gastos
const agregarGasto = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        gastos.push({ monto, fecha });
        mostrarGastos();
        guardarGastos();
    }
};

// Mostrar los gastos y el total de gastos
const mostrarGastos = () => {
    const resultadoDiv = document.getElementById('resultado-gastos');
    resultadoDiv.innerHTML = '';

    if (gastos.length === 0) {
        resultadoDiv.innerHTML = '<p>No hay gastos registrados</p>';
    } else {
        const lista = document.createElement('ul');
        gastos.forEach(gasto => {
            const listItem = document.createElement('li');
            listItem.textContent = `Monto: $${gasto.monto} - Fecha: ${gasto.fecha}`;
            lista.appendChild(listItem);
        });
        resultadoDiv.appendChild(lista);
    }

    mostrarGastoTotal();  // Actualizar el total de gastos cuando se muestran los gastos
};

// Obtener el total de gastos
const getGastoTotal = () => {
    return gastos.reduce((total, gasto) => total + gasto.monto, 0);
};

// Mostrar el total de los gastos
const mostrarGastoTotal = () => {
    const totalGastos = getGastoTotal();
    const totalDiv = document.getElementById('total-gastos');
    totalDiv.textContent = `Total de Gastos: $${totalGastos}`;
};

// Guardar gastos en localStorage
const guardarGastos = () => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
};

// Cargar gastos desde localStorage
function cargarGastos() {
    const gastos = JSON.parse(localStorage.getItem('gastos')) || [];
    const resultadoGastosDiv = document.getElementById('resultado-gastos');
    const totalGastosDiv = document.getElementById('total-gastos');

    if (gastos.length === 0) {
        // Si no hay gastos, muestra el mensaje "No hay gastos registrados"
        resultadoGastosDiv.textContent = 'No hay gastos registrados';
        totalGastosDiv.textContent = 'Total de Gastos: $0';
    } else {
        // Si hay gastos, muestra la lista de gastos y el total
        resultadoGastosDiv.textContent = '';
        gastos.forEach(gasto => {
            const gastoItem = document.createElement('div');
            gastoItem.textContent = `Monto: $${gasto.monto} - Fecha: ${gasto.fecha}`;
            resultadoGastosDiv.appendChild(gastoItem);
        });

        // Calcula el total de los gastos
        const total = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);
        totalGastosDiv.textContent = `Total de Gastos: $${total}`;
    }
}

// Llama a la función al cargar la página
window.onload = function() {
    cargarGastos();
};

// Manejar el formulario de gastos
const gastoForm = document.getElementById('gasto-form');

gastoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const inputMontos = document.getElementById('gasto').value;
    const fecha = document.getElementById('fechaGasto').value;

    const montos = inputMontos.split(',').map(m => parseFloat(m.trim()));

    montos.forEach(monto => {
        if (!isNaN(monto)) {
            agregarGasto(monto, fecha);
        } else {
            console.error('Entrada no válida:', monto);
        }
    });

    document.getElementById('gasto').value = '';
    document.getElementById('fechaGasto').value = '';
});

// Hacer accesibles las funciones en el ámbito global para pruebas
if (typeof window !== 'undefined') {
    window.ingresos = ingresos;
    window.agregarIngreso = agregarIngreso;
    window.getIngresos = getIngresos;
    window.mostrarIngresos = mostrarIngresos;
    window.guardarIngresos = guardarIngresos;
    window.gastos = gastos;
    window.agregarGasto = agregarGasto;
    window.mostrarGastos = mostrarGastos;
    window.guardarGastos = guardarGastos;
}

// Cargar ingresos y gastos al cargar la página
cargarIngresos();
cargarGastos();