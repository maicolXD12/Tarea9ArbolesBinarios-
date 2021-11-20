Menor(nodo = this.cabeza)
{
    let contador = 0
    let valor = 0
    if(!nodo){
      return (`el Menor es ${valor} y el número de niveles fue ${contador}`) ;
    }
    valor = nodo.valor   
    this.Menor(nodo.izquierda);
    contador++
  }