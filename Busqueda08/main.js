console.log("Busqueda")
/*  
Este algoritmo recibe como argumentos
Entrada:
	1)Lista con elementos 
	2)Elemento a buscar 
Salida:
	Si encuentra el valor, retorna la posición o índice
	Si no encuentra el valor, retorna -1
	PSEUCODIGO
	funcion BusquedaLineal(lista,elemento)
		tamañoLista = se halla el tamaño de la lista
		contador = indice desde donde vamos a iterar
		
		Mientras contador < tamañoLista:
			si lista[contador] == elemento
				si si REGRESA EL INDICE
				si no REGRESA -1
		FIN funcion

  */
  
  const busquedaLineal = (lista, elementoAbuscar)=>{
  	const size = lista.length
  	let index = 0;
  	let cantidadAparicion = 0
  	let posicionAparicion =  []
  	let veces = 0
  	while (index < size){
  		veces++
  		let elementoPresente = lista[index]
  		if(elementoPresente === elementoAbuscar){
  			cantidadAparicion++
  			posicionAparicion.push(index)
  			
  			
  			
    			//if(posicionAparicion){
  			//	posicionAparicion = posicionAparicion+","+index  adiciona el indice encontrado separado por una coma "2,4"
  				
  			//}
  			//else{
  			//	posicionAparicion = index  si es la primera vez solo pondra el indice "2"
  			//}
  		
  		
  		}
  		
  		index++
  	
  	
  	}
  	if(cantidadAparicion >0){
  		return{
  			numero_apariciones:cantidadAparicion,
  			posiciones_encontradas: posicionAparicion,
  			vecesn : veces
  		}
  	
  	
  	}
  	return `El elemento ${elementoAbuscar} no se encontro`
  	
  
  
  
  }
  
const miLista = [10,15,34,436324,34,65,334,6564,4,43,65,768,9,424,763,43,73,22,75,3,335]
const resultado = busquedaLineal(miLista,73)
if(resultado.numero_apariciones>0){
	console.log(`Si existe tu numero, aparece ${resultado.numero_apariciones} veces, y esta en las posiciones: ${resultado.posiciones_encontradas}, y el algoritmo Busqueda secuencial itero ${resultado.vecesn} veces`)


}
else{
	console.log(resultado)
}

/*  
	BUSQUEDA BINARIA Nota: se requiere que la lista este ordenada previamente para hacer la busqueda
	ENTRADA:
	1.- Una lista ordenada
	2.- Un elemento a encontrar en la lista
	SALIDA:
	Si el elemento existe:
		si si, retornamos el indice o indices, donde se encontro
		si no , regresamos -1
		
	PSEUDOCODIGO:
	funcion busquedaBinaria(listaOrdenada, elementoAbuscar):
		min = el inicio de la lista (se empieza por lo general en la posicion 0)
		max = largo de la lista -1
		
		Mientras min<=max
			mitad = redondearHaciaAbajo(min+max/2)
			guess = listaOrdenada[mitad]
			si(elementoAbuscar === guess){
				retorna mitad
			}
			si(elementoAbuscar>guess){
				min = mitad +1
			
			
			}
			si (elementoAbuscar < guess){
				max = mitad-1
			
			
			}
			retornar -1
			FIN funcion
			
	
	
*/

var arrayNumeros = [4,2,76,3,6,5,454,44,11]
arrayNumeros.sort((a,b)=>a-b)
console.log(arrayNumeros)
const busquedaBinaria = (listaOrdenada, elemento)=>{
	let min=0, max=listaOrdenada.length -1, mitad = null, guess = null
	let veces = 0
	while (min <=max){
		veces++
		mitad = Math.floor((min+max)/2)
		guess = listaOrdenada[mitad]
		if(elemento === guess){
			console.log(`Este es el numero de veces ${veces}`)
			return mitad
		}
		if(elemento >guess){
			min = mitad +1
		}
		if(elemento < guess){
			max = mitad -1
		
		
		}
	
	
	}
	return -1

}
miLista.sort((a,b)=>a-b)
console.log("BUSQUEDA BINARIA")
const resultadoBinario = busquedaBinaria(miLista,73)
if (resultadoBinario >=0 )console.log(`Si existe tu numero y esta en la posicion ${resultadoBinario}`)
if(resultadoBinario ===-1)console.log("NO EXISTE TU NUMERO")


//Crear una función que encuentre las letras en un arreglo de números y regrese un nuevo arreglo de letras
// Ejemplo input -> [8,‘e’,7,2,‘a’,‘d’,‘f’,2,3,1,4,3]
// Salida → [‘e’,‘a’,‘d’,‘f’] 


var palabras = ["vaca", "casa", "rene","alfabeto", "Ignacio","beta"]
var minusculas = palabras.map((elemento,indice,arreglo)=>{
	return elemento.toLowerCase()
})
minusculas.sort()
console.log(minusculas)
const resultadoBinario2 = busquedaBinaria(minusculas,"beta")

if (resultadoBinario2 >=0 )console.log(`Si existe tu palabra y esta en la posicion ${resultadoBinario2}`)
if(resultadoBinario2 ===-1)console.log("NO EXISTE TU PALABRA")


const letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","ñ","o","p","q","r","s","t"]
const busquedaLetras = (lista, alfabeto)=>{
  	const size = lista.length
  	let index = 0;
  	let cantidadAparicion = 0
  	let posicionAparicion =  []
  	let letraAparicion = []
  	while (index < size){
  		let elementoPresente = lista[index]
  		for(let i = 0; i < alfabeto.length;i++){
  			if(elementoPresente === alfabeto[i]){
  			cantidadAparicion++
  			posicionAparicion.push(index)
  			letraAparicion.push(alfabeto[i])
  			}
  		}
  		
  		
  				
  		
  		
  		
  		index++
  	
  	
  	}
  	if(cantidadAparicion >0){
  		return{
  			numero_apariciones:cantidadAparicion,
  			posiciones_encontradas: posicionAparicion,
  			letras_encontradas: letraAparicion
  		}
  	
  	
  	}
  	return `Ninguna letra se ha encontrado`
  	
  
  
  
  }

const ejemplo = [8,"e",7,2,"a","d","f",2,3,1,4,3]
const resultado3 = busquedaLetras(ejemplo,letras)
if(resultado.numero_apariciones>0){
	console.log(`Se encontraron las siguientes letras ${resultado3.letras_encontradas}  y esta en las posiciones: ${resultado3.posiciones_encontradas}`)


}
else{
	console.log(resultado)
}



//5.- Crear una clase llamada Contacto con los siguientes datos
// - Nombre
// - Apellidos
// - Telefono
//
// Después crear una clase que sea ListaContactos la cual tendrá dos métodos
// - Agregar un contacto
// - Buscar un contacto por nombre 

class Contacto {
	constructor(nombre,apellido, telefono){
		this.nombre = nombre,
		this.apellido = apellido,
		this.telefono = telefono
		
	}

}

class Agenda{

	constructor(){
		this.lista = []// constructor vacio que inicia un array vacio
	}
	//metodo para agregar un contacto a nuestra agenda (a this.lista)
	
	agregar(contacto){
	
		this.lista.push(contacto)
	}
	// metodo para buscar un nombre en nuestra agenda, recorre la lista de contactos uno por uno y compara con el nombre recibido
	buscar(nombre){
		var listaaux = this.lista
		for(let i=0; i<listaaux.length;i++){
			if(nombre === listaaux[i].nombre){
				return listaaux[i] //en caso de encontrarse el nombre, regresamos el contacto completo
			
			
			}
		
		}
		return `No se encontro ${nombre} en la agenda` //en caso de encontrar regresamos este string
		
	}

}

var reneContacto = new Contacto("Rene","Manzano",656454464)
var jesuaContacto = new Contacto("Jesua","Lujan",7898973221)
var adrianContacto = new Contacto("Adrian","Aviles",64655151465)
var erickContacto = new Contacto("Erick","Hernandez",6548654164)

var agendaDevf = new Agenda()

// Agregamos los contactos que creamos a nuestra agenda

agendaDevf.agregar(reneContacto)
agendaDevf.agregar(jesuaContacto)
agendaDevf.agregar(adrianContacto)
agendaDevf.agregar(erickContacto)

//realizamos una busqueda por nombre

console.log(agendaDevf.buscar("Adrian"))









