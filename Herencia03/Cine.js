//* NO ES UNA SUPER CLASE NI UNA SUBBLASE
// ES SOLO UNA CLASE 
import {Sala} from './Sala.js'
import {Pelicula} from './Pelicula.js'
import {Documental} from './Documental.js'
import {Partido} from './Partido.js'

class Cine {
  constructor(sala){
      this.sala=sala
    }
    //METODO
    Reproducir(){
        return this.sala.setMovie()
    }  
}

//INSTACIAR OBJETOS 

//* INSTACIAR NUESTRO OBJETO PELICULA 
const peliculaUno = new Pelicula ('TITANIC', '220MIN', 'B')
const salaUno = new Sala ('1', '250Personas', peliculaUno)
const cinepolisPolanco = new Cine (salaUno)

//* INSTACIAR NUESTRO OBJETO DOCUMENTAL 
const documentalUno = new Documental ('CATFISH', '130MIN', 'MTV')
const salaDos = new Sala ('2', '200Personas', documentalUno)
const cinemex = new Cine (salaDos)

//* INSTACIAR NUESTRO OBJETO PARTIDO
const partidoFut = new Partido ('Champions', '125MIN', 'BARCELONA VS MADRID')
const salaTres = new Sala ('3', '210Personas', partidoFut)
const cineMexico = new Cine (salaTres)

//? IMPRIMIR NUESTROS OBJETOS EN LA CONSOLA
console.log(cinepolisPolanco.Reproducir())
console.log(cinemex.Reproducir())
console.log(cineMexico.Reproducir())

