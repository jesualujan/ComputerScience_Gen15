console.log("Clase de Pilas")

//Implementacion de una pila usando clases con Javascript

class Pila{
    constructor(){
        this.coleccion = []
        this.contador = 0
    }
    apilar(nuevoElemento){
        this.coleccion.push(nuevoElemento)
        this.contador++
        return this.contador

    }
    borrar(){ //Borra el ultimo elemento de la pila LAST IN FIRST OUT 
        var elementoBorrado = this.coleccion.pop()
        this.contador--
        return elementoBorrado
    }
    longitud(){// metodo para saber tamaño de la pila
        return this.contador
    }
    peek(){//Ver el ultimo elemento de la pila
        if(this.longitud()===0) return null
        return this.coleccion[this.contador -1]

    }
    // Por ejemplo var lista= [1,2,3,4]  el indice del ultimo elemento SIEMPRE ES la longitud del arreglo -1 es decir  lista.length-1
    estaVacia(){
        if(this.longitud()===0){
            return true
        }
        else{
            return false
        }
        
    }
}

const pilaAlumnos = new Pila()
console.log(pilaAlumnos)
console.log(pilaAlumnos.apilar("Edwin"))
console.log(pilaAlumnos.apilar("Paulina"))
console.log(pilaAlumnos.apilar("Rosaisela"))
console.log(pilaAlumnos)




