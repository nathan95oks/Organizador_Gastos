let ingresos = [];

function agregarIngreso(monto, fecha) {
    const nuevoIngreso = { monto, fecha };
    ingresos.push(nuevoIngreso);
    return nuevoIngreso;
}

module.exports = { agregarIngreso, ingresos };
