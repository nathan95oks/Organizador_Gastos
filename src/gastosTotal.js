const { gastos } = require('./gastos');

const getGastoTotal = () => {
    return gastos.reduce((total, gasto) => total + gasto.monto, 0);
};

module.exports = {
    getGastoTotal
};
