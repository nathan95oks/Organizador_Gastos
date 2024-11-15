import IngresoMetaAhorro from "./MetaAhorro";

let espacio = [];

function editar(nuevaMeta) {
    if (nuevaMeta <= 0) return false;

    if (espacio.length > 0) {
        espacio[0] = nuevaMeta;
    } else {
        espacio.push(IngresoMetaAhorro(nuevaMeta));
    }

    return nuevaMeta;
}

export default editar;
