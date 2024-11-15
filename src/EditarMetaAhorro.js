import IngresoMetaAhorro from "./MetaAhorro";

let espacio = [];

function editar(nuevaMeta) {
    if (nuevaMeta > 0) {
        if (espacio.length > 0) {
            espacio[0] = nuevaMeta; 
        } else {
            IngresoMetaAhorro(nuevaMeta);
        }
        return nuevaMeta; 
    } else {
        return false; 
    }
}

export default editar ;
