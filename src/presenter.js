let ingresos = [];
let gastos = [];

const agregarIngreso = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        ingresos.push({ monto, fecha });
        mostrarIngresos();
        guardarIngresos();  
    }
};

const getIngresos = () => {
    return ingresos;
};

const mostrarIngresos = () => {
    const resultadoDiv = document.getElementById('resultado-ingresos'); // Obtiene el div donde se mostrarán los resultados
    resultadoDiv.innerHTML = ''; // Limpia el contenido previo

    if (ingresos.length === 0) { // Verifica si no hay ingresos registrados
        resultadoDiv.innerHTML = '<p>No hay ingresos registrados</p>'; // Mensaje si no hay ingresos
    } else {
        const lista = document.createElement('ul'); // Crea una lista para mostrar los ingresos
        ingresos.forEach(ingreso => { // Recorre cada ingreso registrado
            const listItem = document.createElement('li'); // Crea un elemento de lista para cada ingreso
            listItem.textContent = `Monto: $${ingreso.monto} - Fecha: ${ingreso.fecha}`; // Asigna el texto correctamente
            lista.appendChild(listItem); // Agrega el elemento de lista a la lista
        });
        resultadoDiv.appendChild(lista); // Agrega la lista al div de resultados
    }
};


const cargarIngresos = () => {
    const datosGuardados = localStorage.getItem('ingresos');
    if (datosGuardados) {
        ingresos = JSON.parse(datosGuardados);
        mostrarIngresos(); 
    }
};

const guardarIngresos = () => {
    localStorage.setItem('ingresos', JSON.stringify(ingresos));
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

    document.getElementById('ingreso').value = '';
    document.getElementById('fechaIngreso').value = '';
});

if (typeof window !== 'undefined') {
    window.ingresos = ingresos;
    window.agregarIngreso = agregarIngreso;
    window.getIngresos = getIngresos;
    window.mostrarIngresos = mostrarIngresos;
    window.guardarIngresos = guardarIngresos;
}


const agregarGasto = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        gastos.push({ monto, fecha });
        mostrarGastos();
        guardarGastos();
    }
};

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
};

const guardarGastos = () => {
    localStorage.setItem('gastos', JSON.stringify(gastos));
};

const cargarGastos = () => {
    const datosGuardados = localStorage.getItem('gastos');
    if (datosGuardados) {
        gastos = JSON.parse(datosGuardados);
        mostrarGastos();
    }
};

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

if (typeof window !== 'undefined') {
    window.gastos = gastos;
    window.agregarGasto = agregarGasto;
    window.mostrarGastos = mostrarGastos;
    window.guardarGastos = guardarGastos;
}

cargarIngresos();
cargarGastos();
