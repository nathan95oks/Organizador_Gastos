import IngresoMetaAhorro from "./MetaAhorro";

describe ("Agregar Meta de Ahorro",()=>{
 it ("Verfificar si agrega correctamente en mi documento ",()=>{
    expect(IngresoMetaAhorro(200)).toEqual(200);
     });
     it ("Verificar si ingresa valores nulo ",()=>{
        expect(IngresoMetaAhorro("%")).toEqual(false);

     });
     
})