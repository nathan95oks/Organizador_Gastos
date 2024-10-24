let ingresos = [];  
let gastos = [];  

document.getElementById('ingreso-form').addEventListener('submit', function(event) {  
    event.preventDefault();  
    const montoIngreso = parseFloat(document.getElementById('ingreso').value);  
    const fechaIngreso = document.getElementById('fechaIngreso').value;  

    if (!isNaN(montoIngreso) && fechaIngreso) {  
        ingresos.push({ monto: montoIngreso, fecha: fechaIngreso });  
        mostrarIngresos();  
        actualizarAhorro();  
    }  
});  

document.getElementById('gasto-form').addEventListener('submit', function(event) {  
    event.preventDefault();  
    const montoGasto = parseFloat(document.getElementById('gasto').value);  
    const fechaGasto = document.getElementById('fechaGasto').value;  

    if (!isNaN(montoGasto) && fechaGasto) {  
        gastos.push({ monto: montoGasto, fecha: fechaGasto });  
        mostrarGastos();  
        actualizarAhorro();  
    }  
});  

function mostrarIngresos() {  
    const resultadoIngresos = document.getElementById('resultado-ingresos');  
    resultadoIngresos.innerHTML = '';  
    ingresos.forEach(ingreso => {  
        resultadoIngresos.innerHTML += `<li>Monto: $${ingreso.monto} - Fecha: ${ingreso.fecha}</li>`;  
    });  
}  

function mostrarGastos() {  
    const resultadoGastos = document.getElementById('resultado-gastos');  
    resultadoGastos.innerHTML = '';  
    gastos.forEach(gasto => {  
        resultadoGastos.innerHTML += `<li>Monto: $${gasto.monto} - Fecha: ${gasto.fecha}</li>`;  
    });  
}  

function actualizarAhorro() {  
    const totalIngresos = ingresos.reduce((acc, ingreso) => acc + ingreso.monto, 0);  
    const totalGastos = gastos.reduce((acc, gasto) => acc + gasto.monto, 0);  
    const ahorroTotal = totalIngresos - totalGastos;  

    document.getElementById('resultado-ahorro').innerText = `Ahorro Total: $${ahorroTotal.toFixed(2)}`;  
}