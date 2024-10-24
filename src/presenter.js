let ingresos = [];
let gastos = [];

// Función para agregar ingresos
const agregarIngreso = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        ingresos.push({ monto, fecha });
        mostrarIngresos();
        guardarIngresos();
        mostrarAhorroTotal(); // Actualiza el ahorro después de agregar un ingreso
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
        mostrarAhorroTotal(); // Actualiza el ahorro después de agregar un gasto
    }
};

// Obtener gastos
const getGastos = () => {
    return gastos;
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
const cargarGastos = () => {
    const datosGuardados = localStorage.getItem('gastos');
    if (datosGuardados) {
        gastos = JSON.parse(datosGuardados);
        mostrarGastos();
    }
};

// Calcular el total de ahorro
const calcularAhorro = () => {
    const totalIngresos = ingresos.reduce((total, ingreso) => total + ingreso.monto, 0);
    const totalGastos = gastos.reduce((total, gasto) => total + gasto.monto, 0);
    return totalIngresos - totalGastos;
};

// Mostrar el ahorro total
const mostrarAhorroTotal = () => {
    const ahorroTotal = calcularAhorro();
    const ahorroDiv = document.getElementById('resultado-ahorro');
    ahorroDiv.textContent = `Ahorro Total: $${ahorroTotal}`;
};

// Cargar ingresos y gastos al cargar la página
window.onload = function() {
    cargarGastos();
    cargarIngresos();
    mostrarAhorroTotal(); // Mostrar el ahorro total al cargar la página
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
    window.getGastoTotal = getGastoTotal; // Añadido para acceso global
    window.getIngresos = getIngresos; // Asegurarse de que getIngresos esté disponible
    window.mostrarAhorroTotal = mostrarAhorroTotal; // Añadido para acceso global
}

// Cargar ingresos y gastos al cargar la página
cargarIngresos();
cargarGastos();
