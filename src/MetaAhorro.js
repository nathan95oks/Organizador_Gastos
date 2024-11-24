let metaAhorro = [];

function IngresoMetaAhorro(meta, fechaLimite) { 
    if (meta > 0 && fechaLimite) {
        const metaConFecha = { meta: meta, fechaLimite: fechaLimite };
        metaAhorro.push(metaConFecha);
        return metaConFecha;  
    } else {
        return false;
    }
}

export default IngresoMetaAhorro;
