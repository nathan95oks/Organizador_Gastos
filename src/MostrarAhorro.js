
import { SumarIngresos } from "./ingresos.js";
import { SumarGastos } from "./gastos.js";

const CalcularAhorroTotal = () => {
    const totalSumarIngresos = SumarIngresos();
    const Resultado= totalSumarIngresos;
    return Resultado;
};

export { CalcularAhorroTotal };
