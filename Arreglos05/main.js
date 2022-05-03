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


