// EditarMetaAhorro.js
let metaAhorro = []; // Espacio compartido para almacenar la meta

export const editarMetaAhorro = (nuevaMeta) => {
    if (isNaN(nuevaMeta) || nuevaMeta <= 0) {
        return false;
    }
    if (metaAhorro.length === 0) {
        return false;
    }
    const fechaActual = new Date().toISOString();
    metaAhorro[0].meta = nuevaMeta;
    metaAhorro[0].fecha = fechaActual;
    return { meta: nuevaMeta, fecha: fechaActual };
};


export const setEspacio = (nuevoEspacio) => {
    metaAhorro = nuevoEspacio;
};

export const getEspacio = () => metaAhorro;