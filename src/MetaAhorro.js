let espacio = [];

function IngresoMetaAhorro(meta, fechaLimite) { 
    // Verificar si meta es mayor que 0 y si la fechaLimite es válida
    if (meta > 0 && fechaLimite) {
        // Almacenar la meta y la fecha límite en un objeto
        const metaConFecha = { meta: meta, fechaLimite: fechaLimite };
        espacio.push(metaConFecha);
        return metaConFecha;  // Devolver el objeto con meta y fechaLimite
    } else {
        return false;  // Si meta o fechaLimite no son válidos, retornar false
    }
}

export default IngresoMetaAhorro;
