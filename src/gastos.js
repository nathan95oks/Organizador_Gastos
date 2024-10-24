let gastos = [];

const agregarGasto = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        gastos.push({ monto, fecha });
    }
};



const getGastos = () => {
    return gastos;
};

module.exports = { agregarGasto, getGastos, gastos };
