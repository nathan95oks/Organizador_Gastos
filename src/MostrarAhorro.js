import { getIngresos } from "./ingresos.js"; // Importamos getIngresos
import { getGastos } from "./gastos.js"; // Importamos getGastos

const CalcularAhorroTotal = () => {
    const totalSumarIngresos = getIngresos().reduce((total, ingreso) => total + ingreso.monto, 0); // Calculamos el total de ingresos
    const totalSumarGastos = getGastos().reduce((total, gasto) => total + gasto.monto, 0); // Calculamos el total de gastos
    const Resultado = totalSumarIngresos - totalSumarGastos; // Calculamos el ahorro total
    return Resultado;
};

export { CalcularAhorroTotal };
