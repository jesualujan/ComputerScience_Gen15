//*EJEMPLO 2 
class Colas {
    constructor(){
    this.collection=[]
    }

    //METODOS PRINCIPALES DE UNA QUEUE
    enqueue(element){
        this.collection.push(element)
        return this.collection
    }

    dequeue(){
       return  this.collection.shift() 
    }
    //PEEK()
    size(){
        return this.collection.length
    }
    print(){
        console.log(this.collection)
    }

    //METODOS AUXILIARES DE UNA QUEUE
    front() { //TRAER EL PEEK O EL PRIMER ELEMENTO SIN SACARLO DE LA QUEUE, NOTA PEEK ES MÁS USADO EN PILAS 
        return this.collection[0]
    }

    back(){ //TRAE EL ÚLTIMO ELEMENTO DE LA QUEUE SIN SACARLO DE LA MISMA
        return this.collection[this.collection.length -1]
    }

    isEmpty(){
        return this.collection.length === 0
    }
}

// AGREGAR DATOS O INSTANCIAS A LA CLASE 
const myQueueSuperHeroes = new Colas()
console.log(myQueueSuperHeroes.isEmpty())

myQueueSuperHeroes.enqueue({nombre:"Batman", Sexo: "M"})
myQueueSuperHeroes.enqueue({nombre:"Superman", Sexo:"M"})
myQueueSuperHeroes.enqueue({nombre:"Mujer Maravilla", Sexo:"F"})
myQueueSuperHeroes.print()

console.log(myQueueSuperHeroes.size())
console.log(myQueueSuperHeroes.isEmpty())

myQueueSuperHeroes.enqueue({nombre:"Flash", Sexo: "M"})
myQueueSuperHeroes.enqueue({nombre:"Linterna Verde", Sexo:"M"})
myQueueSuperHeroes.print()

console.log(myQueueSuperHeroes.dequeue())
myQueueSuperHeroes.print()

//METODOS AUXILIARES
console.log(myQueueSuperHeroes.front())
myQueueSuperHeroes.print()
console.log(myQueueSuperHeroes.back())
myQueueSuperHeroes.print()