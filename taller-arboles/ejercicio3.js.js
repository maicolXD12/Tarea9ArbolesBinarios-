class Nodo {
    constructor(value){
      this.valor = value;
      this.derecha = null;
      this.izquierda = null;
    }
  }
  
  
  class ArbolBinario {
    constructor(){
      this.cabeza = null;
    }
  

    esta_vacio(){
      return this.cabeza === null;
    }
  
    agregar(value){
  
      if(this.esta_vacio()){
   
        this.cabeza = new Nodo(value);
  
        return;
      }
  
   
      var aux = this.cabeza;
  
      while(aux){

        if (value < aux.valor){
          if (aux.izquierda){
            aux = aux.izquierda
          }else{
            aux.izquierda = new Nodo(value);
   
            return;
          }
         
        } else { 
          if (aux.derecha){
            aux = aux.derecha
          }else{
            aux.derecha = new Nodo(value);
     
            return;
          }
        }
      }
    }
  
    pre_order(nodo = this.cabeza){
      if (!nodo){
        return;
      }
      console.log(nodo.valor);
      this.pre_order(nodo.izquierda);
      this.pre_order(nodo.derecha);
    }

      
    post_order(nodo = this.cabeza){
      if (!nodo){
        return;
      }
      this.post_order(nodo.izquierda);
      this.post_order(nodo.derecha);
      console.log(nodo.valor);
    }
  
   
  
    in_order(nodo = this.cabeza){
      if(!nodo){
        return;
      }
      this.in_order(nodo.izquierda);
      console.log(nodo.valor);
      this.in_order(nodo.derecha);
    }
  }


 function punto3(arbol)
{
    let ejecutar = true;
    while(ejecutar)
    {
        console.log("Ingrese el número para retirarse escriba la palabra 'salir' o 'terminar'");
        let ingreso = prompt("ingrese el valor: ")
        if(ingreso == "salir" || ingreso == "terminar")
        {
            ejecutar = false;
        }
        else
        {
            let valor = parseInt(ingreso)
            arbol.agregar(valor);
        }

    }
}
 
let arbol = new ArbolBinario();
punto3(arbol);
arbol.in_order();

