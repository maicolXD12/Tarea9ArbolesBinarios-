generadorConArreglo(arbol, arreglo)
{
    for(let x = 0;x < arreglo.length;x++)
    {
        arbol.agregar(arreglo[x]);
        console.log("Pos:" + x)
        console.log("Valor: " + arreglo[x])
    }

}