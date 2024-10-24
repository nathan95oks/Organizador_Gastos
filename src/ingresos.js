let ingresos = [];

const agregarIngreso = (monto, fecha) => {
    if (typeof monto === 'number' && !isNaN(monto) && fecha) {
        ingresos.push({ monto, fecha });
    } ;
};

const SumarIngresos=()=>{
    let totalSumarIngresos=0;
    for (let i=0 ;i<ingresos.length;i++)
    {
       totalSumarIngresos+=ingresos[i].monto;
    }
    return totalSumarIngresos;
   }


const getIngresos = () => {
    return ingresos;
};



module.exports = { agregarIngreso, getIngresos, ingresos,SumarIngresos };