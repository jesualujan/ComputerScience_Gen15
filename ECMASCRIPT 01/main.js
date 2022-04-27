console.log("Ya se conecto el archivo de javascript");
//Variables globales
var alumno = "Andres Guevara"
var sumagloball = 0;

console.log("El siguiente alumno "+alumno+" es muy aplicado");

function sumaglobal(...rest){
    const prueba = "hola"
    for(let i of rest){
        sumagloball += i
    }
}



console.log(`Esta es la suma global ${sumagloball} antes de la funcion`)
sumaglobal(1,2,3,4)
console.log(`Esta es la suma global ${sumagloball} despues de la funcion`)





//ECMASCRIPT 6 TEMPLATE LITERALS

console.log(`Este ejemplo es con ECMASCRIPT 6  ${alumno} `);

//NOTACION REST

function suma(a,b){
    var c = a + b

    return c

}

var primer = 50;
var segunda = 100;

var respuesta = suma(primer,segunda)

console.log(`La suma de la variable primer ${primer} y segunda ${segunda} es ${respuesta}`);

var numeros = [10,20,30,40,100];

function sumarest(...num){
    for(let i of num){
        console.log(i)
    }


}
console.log("aqui se esta llamando la notacion rest");
sumarest(1,3,4,5,7,76,656,77,345,54,65,44,30,12,23,1);
alumno = "Luis"
function sumaarray(arreglo){
    var arregloreturn = []
    var suma = 0;
     //let i   se puede , pero no es buena practica ya que existiria i fuera del ciclo for
    for(let i=0;i<arreglo.length;i++){
        suma = suma + arreglo[i];
        // suma += arreglo[i]
    }
    alumno = "Edwin"
    console.log(`El valor de mi contador i es ${i}`)
    console.log(`El alumno ${alumno} esta dentro de la funcion sumaarray`)
    arregloreturn.push(suma)
    //arregloreturn.push(i)
    return arregloreturn;

}

var resultadoarray = sumaarray(numeros);
//console.log(`Estoy fuera de mi funcion sumaaray y el valor de i es ${resultadoarray[1]}`)
console.log(`sumaarray es iguall a ${resultadoarray}`);
console.log(`El alumno ${alumno} ya duro mucho tiempo`);


//Arrow function o funcion flecha


const sumaarrow =(a,b,c,d)=>a+b+c+d;
const sumaarrow2 = (a,b) =>{
    return a+b
}
const cuadrado = x => x*x;
var arregloNumeros = [1,2]
var tercerNumero = [3,4]
var arregloNumeros2 = [6,7,8]


//var respuestaarrow = sumaarrow(10,2,1)
//accediendo a arregloNumeros con el indice
//var respuestaarrow1 = sumaarrow(arregloNumeros[0],arregloNumeros[1],arregloNumeros[2])
var respuestaarrow2 = sumaarrow(...tercerNumero, ...arregloNumeros)
console.log(respuestaarrow2)

