let espacio=[];

function IngresoMetaAhorro(meta)
{ 
    
    if (meta>0)
    {
        espacio.push(meta);
        return meta ;
    }
    else {
        return false;
    }

}
export default IngresoMetaAhorro ;