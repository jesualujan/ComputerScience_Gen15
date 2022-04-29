//* NO ES UNA SUPER CLASE NI UNA SUBBLASE
// ES SOLO UNA CLASE 
import {Sala} from './Sala.js'
import {Pelicula} from './Pelicula.js'
import {Documental} from './Documental.js'
import {Partido} from './Partido'

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