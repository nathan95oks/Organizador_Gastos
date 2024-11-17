let ingresos = [];
let gastos = [];
// Meta de Ahorro
let espacio = [];

const IngresoMetaAhorro = (metaAhorro, fechaLimite) => {
    // Verificamos que la meta sea un número positivo y la fecha no sea vacía
    if (isNaN(metaAhorro) || metaAhorro <= 0 || !fechaLimite) {
        return false;  // Si hay algún error, devolvemos false
    }

    // Devolvemos un objeto con las propiedades 'meta' y 'fechaLimite'
    return { meta: metaAhorro, fechaLimite: fechaLimite };
};



// Función para agregar meta de ahorro
// Función para agregar meta de ahorro
const agregarMetaAhorro = (metaAhorro, fechaLimite) => {
    const metaDisplay = document.getElementById('meta-div');
    const esMetaValida = !isNaN(metaAhorro) && metaAhorro > 0 && fechaLimite;

    if (!esMetaValida) {
        alert("Por favor, ingrese una meta de ahorro válida y una fecha límite.");
        return;
    }

    const metaFinal = IngresoMetaAhorro(metaAhorro, fechaLimite);
    espacio[0] = metaFinal;  // Asegúrate de que el valor de 'espacio' se actualice

    metaDisplay.textContent = `Meta de Ahorro: $${metaFinal.meta.toFixed(2)} - Fecha límite: ${metaFinal.fechaLimite}`;
};


// Función para editar la meta de ahorro
const editarMetaAhorro = (nuevaMeta) => {
    const metaDisplay = document.getElementById('meta-div');
    const esMetaValida = !isNaN(nuevaMeta) && nuevaMeta > 0;
    if (!esMetaValida) {
        alert("Por favor, ingrese una meta de ahorro válida para editar.");
        return;
    }
    const metaFinal = IngresoMetaAhorro(nuevaMeta);
    espacio[0] = metaFinal; // Editar la meta en el espacio
    metaDisplay.textContent = `Meta de Ahorro (Editada): $${metaFinal.toFixed(2)}`;
    alert("Meta de ahorro editada correctamente.");
};

// Guardar meta de ahorro en localStorage
const guardarMeta = (meta) => {
    localStorage.setItem('meta', JSON.stringify(meta));  // Guarda el objeto con la meta y la fecha límite
};
;

// Cargar la meta de ahorro desde localStorage
const cargarMeta = () => {
    const datosGuardados = localStorage.getItem('meta');
    if (datosGuardados) {
        const meta = JSON.parse(datosGuardados);
        espacio.push(meta);  // Añadimos la meta de ahorro al espacio correctamente
        const metaDisplay = document.getElementById('meta-div');
        metaDisplay.textContent = `Meta de Ahorro: $${meta.meta.toFixed(2)} - Fecha límite: ${meta.fechaLimite}`;
    }
};



// Manejo del formulario para agregar meta de ahorro
const metaForm = document.getElementById('Meta-form');
const metaInput = document.getElementById('meta');
const fechaLimiteInput = document.getElementById('fechaLimite');

metaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const metaAhorro = parseFloat(metaInput.value);
    const fechaLimite = fechaLimiteInput.value;

    agregarMetaAhorro(metaAhorro, fechaLimite);  // Llamamos a la función para agregar la meta de ahorro con fecha límite
    guardarMeta({ meta: metaAhorro, fechaLimite });  // Guardamos la meta y la fecha límite en el almacenamiento

    metaInput.value = '';
    fechaLimiteInput.value = '';
});


// Manejo del formulario para editar meta de ahorro
const editarMetaForm = document.getElementById('EditarMeta-form');
const editarMetaInput = document.getElementById('editar-meta');

editarMetaForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nuevaMeta = parseFloat(editarMetaInput.value);
    editarMetaAhorro(nuevaMeta);

    editarMetaInput.value = '';
});




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
    ahorroDiv.textContent = `Ahorro Total: $${ahorroTotal.toFixed(2)}`;
    
    verificarCumplimientoMetaAutomatica(ahorroTotal); // Verificar meta automáticamente
};

// Cargar ingresos y gastos al cargar la página
window.onload = function() {
    cargarMeta();  // Cargar la meta de ahorro y la fecha límite
    cargarGastos();
    cargarIngresos();
    const ahorroTotal = calcularAhorro();
    mostrarAhorroTotal(); // Mostrar el ahorro total al cargar la página
    verificarCumplimientoMetaAutomatica(ahorroTotal); // Verificar meta automáticamente al cargar

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


// Función para verificar el cumplimiento de la meta
// Función para verificar el cumplimiento de la meta de ahorro
const verificarCumplimientoMetaAutomatica = (ahorroTotal) => {
    const notificacionesDiv = document.getElementById('notificaciones');
    let metaAhorro = espacio.length > 0 ? espacio[0] : { meta: 0, fechaLimite: '' };

    if (metaAhorro.meta > 0) {
        const fechaLimite = new Date(metaAhorro.fechaLimite);
        const hoy = new Date();
        
        if (ahorroTotal >= metaAhorro.meta && hoy <= fechaLimite) {
            notificacionesDiv.textContent = "¡Felicidades! Has alcanzado tu meta de ahorro.";
            notificacionesDiv.style.color = "green";
        } else if (hoy > fechaLimite) {
            notificacionesDiv.textContent = `La fecha límite para alcanzar la meta ha pasado. Te faltan $${(metaAhorro.meta - ahorroTotal).toFixed(2)} para alcanzarla.`;
            notificacionesDiv.style.color = "red";
        } else {
            notificacionesDiv.textContent = `Te faltan $${(metaAhorro.meta - ahorroTotal).toFixed(2)} para alcanzar tu meta.`;
            notificacionesDiv.style.color = "orange";
        }
    }
};





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
