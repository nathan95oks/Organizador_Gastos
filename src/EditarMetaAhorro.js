// EditarMetaAhorro.js
let espacio = []; // Espacio compartido para almacenar la meta

export const editarMetaAhorro = (nuevaMeta) => {
    // Validación de nuevaMeta
    if (isNaN(nuevaMeta) || nuevaMeta <= 0) {
        return false;
    }

    // Si espacio está vacío, no se puede editar
    if (espacio.length === 0) {
        return false;
    }

    // Actualizar la meta y la fecha
    const fechaActual = new Date().toISOString();
    espacio[0].meta = nuevaMeta;
    espacio[0].fecha = fechaActual;



    // Retornar el objeto actualizado
    return { meta: nuevaMeta, fecha: fechaActual };
};

// Exporta el espacio si necesitas inicializarlo o manipularlo externamente
export const setEspacio = (nuevoEspacio) => {
    espacio = nuevoEspacio;
};

export const getEspacio = () => espacio;