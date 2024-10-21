let ingresos = [];

const agregarIngreso = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        ingresos.push({ monto, fecha });
    } else {
        console.error('Entrada no válida: ', monto);
    }
};

const getIngresos = () => {
    return ingresos;
};

module.exports = { agregarIngreso, getIngresos, ingresos };
