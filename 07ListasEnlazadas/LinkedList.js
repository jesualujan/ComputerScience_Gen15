//* CREAR NUESTRA CLASE LLAMADA NODE 
//* EL NODO ES LA INFORMACIÓN (DATA) DEL ELEMENTO (DEL OBJETO)
//* TIENE UN APUNTADOR/ENLACE AL SIGUIENTE NODO 

class Node {
    constructor(){
        this.data=data //en data guardamos cualquier objeto que queramos
        this.next=null //por defecto este es null
    }
}

//* VAMOS A CREAR NUESTRA CLASE LLAMADA LinkedList
//* UNA LISTA ENLAZADA DEBE TENER UNA CABECERA(Head)
//* TIENE UN TAMAÑO DE LISTA(length)

//? LOS METODOS QUE PUEDEN TRABAJARSE EN UNA LISTA ENLAZADA 
  //? AGEGAR UN ELELEMTO (add)
  //? - al principio(addStart) o  -al final (addEnd)
  //? BORRAR UN ELEMENTO delete(data)
  //? BUSCAR UN ELEMENTO get(index)


class LinkedList {
    constructor(){
        this.head=null //esto significa que no hay nada en la lista 
        this.length=0 // no hay elementos dentro de la lista 
    }
    //METODO AUXILIAR 
    isEmpty(){
       return this.head===null 
    }

    //*METODOS DE NUESTRA LISTA ENLAZADA

    addStart(data){
        const node = new Node (data) //creamos nuestro nodo con su data 
        if(!this.head){ //QUE VERDADERAMENTE NUESTRA LISTA ESTA VACIA 
        //asigamnos el primer nodo como la cabezera (head) de la lista 
            this.head=node //asigmanos el primer nodo como la cabeza o cabecera de la lista 
        }else{
           // pequeño recorrido tomando el inicio del nodo y la posición actual 
            node.next=this.head
            this.head=node //nuevo nodo
        }
        this.length++ //saber cuantos elementos tengo en mi lista.
    }

    addEnd(data){
       const node = new Node (data)
       if(this.head === null){
        this.head=node//asigamnos el primer nodo como la cabeza de la lista 
       }else {
           // en este else nosotros ya sabemos que existe una cabezera (this.head)
           let currentNode = this.head
           //bucle while: mientras( se cumpla mi condición ) { haz esto }
           while(currentNode.next){
                //verificar si next tiene un nodo 
                currentNode = currentNode.next // sustituyo el nodo que vive en next a mi nodo actual 
           }
           //cuando next sea nulo, entonces se sale del while y continua con el resto del código 
           currentNode.next=node
       }
       this.length++ //saber cuantos elementos tengo en mi lista.
    }









    
}