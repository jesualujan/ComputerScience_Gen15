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
        return this.sala.setMovie() + 
           "\n" + this.sala.getPeople() + 
             "\n" + this.sala.getSalaNumber()
    }  
}

//INSTACIAR OBJETOS 

//* INSTACIAR NUESTRO OBJETO PELICULA 
const peliculaUno = new Pelicula ('TITANIC', '220MIN', 'B')
const salaUno = new Sala ('SALA 1', '250 Personas', peliculaUno)
const cinepolisPolanco = new Cine (salaUno)

//* INSTACIAR NUESTRO OBJETO DOCUMENTAL 
const documentalUno = new Documental ('CATFISH', '130MIN', 'MTV')
const salaDos = new Sala ('SALA 2', '200 Personas', documentalUno)
const cinemex = new Cine (salaDos)

//* INSTACIAR NUESTRO OBJETO PARTIDO
const partidoFut = new Partido ('Uefa Champions League', '125MIN', 'BARCELONA VS REAL MADRID')
const salaTres = new Sala ('SALA 3', '210 Personas', partidoFut)
const cineMexico = new Cine (salaTres)

//? IMPRIMIR NUESTROS OBJETOS EN LA CONSOLA
console.log(cinepolisPolanco.Reproducir())
console.log(cinemex.Reproducir() )
console.log(cineMexico.Reproducir(),"\n", partidoFut.equipo )

