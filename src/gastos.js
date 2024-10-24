let gastos = [];

const agregarGasto = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        gastos.push({ monto, fecha });
    }
};

const SumarGastos = () => {  
    let totalSumarGastos = 0;  
    for (let i = 0; i < gastos.length; i++) {  
        totalSumarGastos += gastos[i].monto;  
    }  
    return totalSumarGastos;  
};  

const getGastos = () => {
    return gastos;
};

module.exports = { agregarGasto, getGastos, gastos,SumarGastos };
