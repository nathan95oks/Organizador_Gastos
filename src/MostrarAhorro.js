
import { SumarIngresos } from "./ingresos.js";
import { SumarGastos } from "./gastos.js";

const CalcularAhorroTotal = () => {
    const totalSumarIngresos = SumarIngresos();
    const totalSumarGastos = SumarGastos();
    const Resultado= totalSumarIngresos - totalSumarGastos;
    return Resultado;
};

export { CalcularAhorroTotal };
