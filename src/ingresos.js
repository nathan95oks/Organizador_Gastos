let ingresos = [];

const agregarIngreso = (monto, fecha) => {
    if (
        typeof monto === 'number' &&
        !isNaN(monto) &&
        typeof fecha === 'string' &&
        fecha.trim() !== ''
    ) {
        ingresos.push({ monto, fecha });
    }
};

const getIngresos = () => {
    return ingresos;
};

module.exports = { agregarIngreso, getIngresos, ingresos };
