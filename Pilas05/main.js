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

console.log(pilaAlumnos.borrar())
console.log(pilaAlumnos)
console.log(pilaAlumnos.longitud())
console.log(pilaAlumnos.apilar("Jonathan"))
console.log(pilaAlumnos.peek())

console.log(pilaAlumnos.estaVacia())
console.log(pilaAlumnos.apilar("Rene"))
console.log(pilaAlumnos.apilar("Jesua"))
console.log(pilaAlumnos.apilar("Iris"))
console.log(pilaAlumnos)
//BORRAR TODOS LOS ALUMNOS
let numeroAlumnos = pilaAlumnos.contador
for(let i =0; i<numeroAlumnos;i++){
    pilaAlumnos.borrar()
}

console.log(pilaAlumnos.estaVacia())
console.log(pilaAlumnos)
var arrayEstudiantesAutomatico = ["Rene","Jesua","Iris","Edwin","Mario","Roberto"]

const pilaNombres = new Pila()
for (let i =0;i< arrayEstudiantesAutomatico.length; i++ ){
    pilaNombres.apilar(arrayEstudiantesAutomatico[i])


}
console.log(pilaNombres)
//FUNCION que borra los elementos necesarios para regresar el numero de elementos dado
// FORMA 1 con RECURSIVIDAD
const miFuncion = (pila,numero)=>{
    if(pila.longitud()< numero){
        return "Elige un numero menor"
    }
    if(pila.longitud()!== numero){
        pila.borrar()
        return miFuncion(pila,numero)
    }
    return pila

}
// FORMA 2 ciclo FOR
const miFuncionFor = (pila,numero)=>{
    let long = pila.longitud()
    let borrar = long-numero
    for (let i=0;i< borrar; i++){
        pila.borrar()
    }
    return pila



}

console.log(miFuncionFor(pilaNombres,2))


// 2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
// Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
// Salida: [3,2,3,4,6,8,1,7]
// 3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios
// pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo
// camino. Muestre el camino recorrido tanto de ida como de vuelta.
// Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
// Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen

const remplazar=(pila, numero1,numero2)=>{
    let lon = pila.longitud()
    for (let i=0; i<lon;i++){

        if(pila.peek()==numero2){
            pila.borrar()
            pila.apilar(numero1)
            console.log(pila)
            return pila
        }
        else{
            
            pila.borrar()
        }
    }


}
var arregloN = [42,4,67,8,3,334,66,4,3,7,9,24]

const pilaNueva = new Pila()

for (let i =0;i< arregloN.length; i++ ){
    pilaNueva.apilar(arregloN[i])

}
console.log(pilaNueva)
var p = remplazar(pilaNueva,666,4)
console.log(p)

//resultado esperado es [42,4,67,8,3,334,66,666]