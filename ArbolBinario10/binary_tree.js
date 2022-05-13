//PASOS PARA DESARROLLAR EL CÓDIGO DEL ÁRBOL BINARIO

//* CLASE NODO 

class Node { //? CREAR NUESTROS NODOS -> cierta data 
    constructor(data,left,right){
        this.data=data
        this.left=left   
        this.right=right
    }
}

class BinaryTree { //? VAMOS A CONSTRUIR NUESTRO ÁRBOL BINARIO 
    constructor(){
       this.root=null 
    }
    //VAMOS A TENER COMO METODOS PRINCIPALES
    //* agregar -> add: se encarga de agregar un dato
   //*contiente -> contains: verificar si un nodo existe respecto a un dato 

   add(data){
        //primero que debemos verificar es si root esta vacía
        if(this.root === null){
            //vamos a crear un nuevo nodo (data,null,null)
            this.root = new Node (data, null , null)
            return 
        }
        //si no está vacia
        //vamos a crear un nuevo nodo, -> currentNode
        let currentNode = this.root
        //agregamos un ciclo mientras cada nodo sea un subarbol
        while(true){
            if(data < currentNode.data){
                //revisar si el nodo de la izquierda está vacío
                if(currentNode.left !== null){
                    // mi nodo actual le asigne la posición de la izquierda
                    currentNode = currentNode.left
                }else{
                    currentNode.left = new Node(data, null, null)
                    return currentNode.left
                }
            }else {
                // si el nodo de la derecha está vacio
                if(currentNode.right !== null){
                    //agregamos nuevo nodo
                    currentNode=currentNode.right
                }else{
                    //cambiar nuestro nodo actual por el hijo a la derecha 
                    currentNode.right= new Node (data,null,null)
                    return currentNode.right
                }
            }
        }
   }

   contains(data){
            //partimos de la raiz
            let currentNode = this.root
            // mientras currentNode exista 
            while(currentNode !== null){
                //exista data adentro del nodo 
                if(data === currentNode.data){
                    return true 
                }else{
                    // si mi data es menor es decir currentNode.data
                    if(data < currentNode.data){
                        //me asigno a la izquierda
                        currentNode = currentNode.left
                    }else{
                        //si mi data no es menor, es mayor
                        //asignamos a la derecha 
                        currentNode = currentNode.right
                    }
                }
            }
            return false 
   }
}


//agregar información // instancias 

const nodo = new BinaryTree()
nodo.add(12)
nodo.add(13)
nodo.add(11)
console.log(nodo.contains(20))//false, no existe el nodo con la data 20
console.log(nodo)