let gastos = [];  


const agregarGasto = (monto, fecha) => {  
    if (!isNaN(monto) && fecha) {  
        gastos.push({ monto: parseFloat(monto), fecha });  
    }  
};  


const SumarGastos = () => {  
    let totalSumarGastos = 0;  
    for (let i = 0; i < gastos.length; i++) {  
        totalSumarGastos += gastos[i].monto;  
    }  
    return totalSumarGastos;  
};  


const obtenerGastos = () => {  
    return gastos;  
};  

export { agregarGasto, SumarGastos, obtenerGastos };