const esGastoValido = (monto, fecha) => typeof monto === 'number' && !isNaN(monto) && Boolean(fecha);

let gastos = [];
const agregarGasto = (monto, fecha) => {
    if (esGastoValido(monto, fecha)) {
        gastos.push({ monto, fecha });
    }
};


const getGastos = () => {
    return gastos;
};

module.exports = { agregarGasto, getGastos, gastos };
