console.log("Clase de ordenamiento")


// METODO DE LA BURBUJA

function cambiar(indiceA,indiceB,arreglo){
	const temp = arreglo[indiceA]
	arreglo[indiceA] = arreglo[indiceB]
	arreglo[indiceB] = temp
	return arreglo

}


function Burbuja(arreglo){
	let operaciones = 0
	let longitud = arreglo.length
	for(let i=0; i<arreglo.length ;i++){
		for(let j=0; j<longitud;j++){
			//console.log(`Estos son los elementos que se estan comparando elemento j ${arreglo[j]} y elemento j+1 ${arreglo[j+1]}`)
			if(arreglo[j]>arreglo[j+1]){
				
				cambiar(j,j+1,arreglo)
				
			}
			operaciones++
			
		
		}
		//console.log(`En la iteracion ${i}, el arreglo esta asi ${arreglo}`)
		console.log(arreglo)
		longitud--
	}
	return {
		ordenado:arreglo,
		numop: operaciones
	}
}
let numeros = [58,4,26,3,1,466,78,98,66,5556,74,1,40]
let numerosOrdenados = Burbuja(numeros)
console.log(numerosOrdenados.ordenado)
console.log(numerosOrdenados.numop)

function metodoSeleccion(lista){
	let operaciones = 0
	for(let i=0;i<lista.length;i++){
		let min =i
		for (let j=i+1;j<lista.length;j++){
			operaciones++
			if(lista[j]<lista[min]){
				min = j 
				
			}}
			cambiar(i,min,lista)
			
	}
	return [lista,operaciones]

}

let numerosOrdenados2 = metodoSeleccion(numeros)
console.log("Metodo Seleccion")
console.log(numerosOrdenados2[0])
console.log(numerosOrdenados2[1])

var contadorR = 0 // variable global
function mergeSort(unsortedArray){
	//si mi arreglo es solo un elemento o 0 elementos , lo regreso porque no hay nada que ordenar
	if (unsortedArray.length <=1){
		return unsortedArray
	}
	//Hallamos el tamaño del arreglo
	const size = unsortedArray.length
	//Hallamos la mitad del arreglo
	
	const middle = Math.floor(size/2)
	//Obtenemos ls mitades derecha e izquierda
	 const left = unsortedArray.slice(0,middle) //parte izquierda
	 const right = unsortedArray.slice(middle) // parte derecha
	 
	 //RECURSION Dividimos hasta llegar a uno o tener un arreglo ordenado
	 
	 const sortedLeft = mergeSort(left)
	 const sortedRight = mergeSort(right)
	 
	 return merge(sortedLeft,sortedRight)
}

function merge(left,right){
	contadorR++
	let resultArray = []
	
	let leftIndex=0, rightIndex=0
	
	//Agregamos los valores de cada lado (right,left) dentro de resultArray en orden
	while (leftIndex < left.length && rightIndex<right.length){
		if(left[leftIndex]<right[rightIndex]){
			resultArray.push(left[leftIndex])
			leftIndex++ // movemos el indice hacia adelante del arreglo izquierdo
		
		
		}else{
			resultArray.push(right[rightIndex])
			rightIndex++ //movemos el indice hacia adelante del arreglo derecho
		}
	
	
	}
	
	// concatenar el remanente o sobrante. Si concatenamos cuando los indices son iguales a la longitud de las mitades, no se vera reflejado ningun cambio
	const final = resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
	
	return final
}

let numerosOrdenados3 = mergeSort(numeros)
console.log("MERGE")
console.log(`Contador de merge afuera es ${contadorR}`)
console.log(numerosOrdenados3)




