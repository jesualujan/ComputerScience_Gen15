console.log("clase de arrays")
//Primera manera de declarar un arreglo 
var arreglo1 = new Array()
var alumnos = new Array("Rene","Mario","Luis","Jesua")
//console.log(alumnos.length)

//Segunda manera y mas usada es con los corchetes []

var alumnos2 = ["Ander", "William", "Estela", "Natanael","Iris","Edwin","Erick"]

console.log(alumnos2[2])
//CICLO FOR
/*for(let i = 0; i<alumnos2.length;i++){
    console.log(alumnos2[i])
}
//Solucion de Natanael
for (let i = 0 ; i <=alumnos2.length ; i++){ 
    if (i % 2 == 0){ console.log(alumnos2[i]) }} 

//2da solucion 
for(let i = 0; i<alumnos2.length;i+=2){
    console.log(alumnos2[i])
    } */

//CONCATENAR DOS ARRAYS
var primerArray = ["Rene", "Jesua"]
var segundoArray = ["Edwin","Natanael"]

var concatenado = primerArray.concat(segundoArray,alumnos2)

console.log(concatenado)

var junto = alumnos2.join(",")
console.log(junto)

//POP elimina el ultimo elemento del arreglo y lo regresa
var ultimo = alumnos2.pop()
console.log(ultimo)
//Push 
alumnos2.push(ultimo)
console.log(alumnos2)

//SPLICE (indice de inicio, Numero elementos a borrar, "Elemento nuevo")
//En caso de solo borrar , solo meter 2 parametros , indice inicio, numero de elementos a borrar
console.log(alumnos2)
//alumnos2.splice(2,1)//posicionate en 2 que es Estela, y borrame  1 elemento (es decir a Estela)
//alumnos2.splice(3)//Regresa el numero dado empezando por el inicio
//alumnos2.splice(2,5) // == alumnos2.spplice(2)
//alumnos2.splice(2,0,"Maria","Roberto","Mel G", "Karol G",["manzana","pera"],2,10,99)//insertar elementos en el indice 2
//console.log(alumnos2)

//metodo shift y unshift (igual que pop y push pero con el primer elemento de la lista)
alumnos2.unshift("Thomas")
console.log(alumnos2)
var primerElemento = alumnos2.shift()
console.log(primerElemento)
console.log(alumnos2)

//SPLIT
var juntado = "perros,gatos,tortugas,conejo,vibora,hamster,iguana,peces,llamas"
var separado = juntado.split(",")
console.log(separado)

var comida = "tacos;Tortas:Chilaquiles.Tostadas/Pozole,Quesadilla;enchiladas flautas+pancita"
var comida2 = comida
var comidas = comida.split(";")
console.log(comidas)

//replace
var ejemploReplace = "computadora"
var rem = ejemploReplace.replace("c","N")
console.log(rem)

//Solucion de erick
var separadores = [","," ",";",":","/","+","."]
for(let x = 0; x < comida.length; x++) {
    for(let y =0; y< separadores.length;y++){
        if(separadores[y]== comida[x]){
            comida = comida.replace(separadores[y],",")
        }

    }
}


     /*if (comida[x] === ";"){
          comida = comida.replace(";", ",") }
          else if (comida[x] === ":"){ comida = comida.replace(":", ",") }
          else if (comida[x] === "."){ comida = comida.replace(".", ",") }
          else if (comida[x] === "/"){ comida = comida.replace("/", ",") }
          else if (comida[x] === "+"){ comida = comida.replace("+", ",") }
          else if (comida[x] === " "){ comida = comida.replace(" ", ",") } } */
var final = comida.split(",")
//Segunda manera con split y join
var final2 = comida2.split(";").join(",").split(":").join(",").split("/").join(",").split("+").join(",").split(" ").join(",").split(",")
console.log(final)
console.log(final2)
//expresion regular 
var expresionRegular = /[:, ;.+/]/
var final3 = comida.split(expresionRegular)

//Arrays con JSON JAVASCRIPT OBJECT NOTATION 

var estudiantes = [
    {
        nombre:"Andres",
        apellido:"Guevara",
        edad:28,
        mayor:false,
        sueldo:5000
    },
    {
        nombre:"Maria de los Angeles",
        apellido:"Baltazar",
        edad:40,
        mayor:false,
        sueldo:15000
    },
    {
        nombre:"Rene",
        apellido:"Manzano",
        edad:30,
        mayor:false,
        sueldo:2000
    },
    {
        nombre:"Miguel",
        apellido:"Sauza",
        edad:25,
        mayor:false,
        sueldo:20000
    }
]
for(let i =0;i< estudiantes.length;i++){

    console.log(estudiantes[i].nombre)

}

//METODOS FUNCIONALES
//RECORRER CON UN FOR EACH  

estudiantes.forEach((elementoActual,indice,array)=>{

    console.log(elementoActual)
    console.log(indice)
    console.log(array)


})
//MAP
var estudiantesnuevo = estudiantes.map((elementoActual,indice,array)=>{
    if (elementoActual.edad >29){
        return{...elementoActual,mayor:true}
    }
    else{
        return{...elementoActual,mayor:false
    }}
    


})
console.log(estudiantesnuevo)
var estudiantesIncrementoSueldo =estudiantes.map((elemento,indice,arreglo)=>{
    return {...elemento,sueldo:elemento.sueldo+1500,seguroMedico:true}

})
console.log(estudiantesIncrementoSueldo)



//FILTER  nos permite crear un arreglo a partir de los elementos de otro PERO QUE CUMPLAN CON UNA CONDICION DADA

var estudiantesFiltrados = estudiantes.filter((elemento,indice,arreglo)=>{
    return elemento.sueldo >= 10000

})
console.log(estudiantesFiltrados)

//REDUCE

const numerosArreglo = [1,5,10,15,20]
const stringArreglo = ["rene","roberto",50,"manzano"]
const funcion = (acumulador,valor) => acumulador*valor
console.log(numerosArreglo.reduce(funcion,10)) //primer parametro es la callback function y el segundo es el valor inicial
//console.log(numerosArreglo.reduce((acumulador,valor)=>{
//    return acumulador+valor
//})) // esto es equivalente a console.log(numerosArreglo.reduce(funcion))
