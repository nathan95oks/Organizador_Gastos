let ingresos = [];

function agregarIngreso(monto, fecha) {

    const ingresoExistente = ingresos.find(ingreso => ingreso.monto === monto && ingreso.fecha ===fecha);
    if(ingresoExistente){
        return null;
    }

    const nuevoIngreso = { monto, fecha };
    ingresos.push(nuevoIngreso);
    return nuevoIngreso;
}

module.exports = { agregarIngreso, ingresos };
