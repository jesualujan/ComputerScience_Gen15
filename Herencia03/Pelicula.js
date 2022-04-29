//* PELICULA ES MI SUBCLASE
import {Largometraje} from './Largometraje.js'

class Pelicula extends Largometraje {
    constructor(titulo,duracion,genero){
         //? Aquí indicamos que atributos de mi clase padre va a heredar
        super(titulo,duracion)
        this.genero=genero

    }
    //METODO
      getGender(){
        return this.genero
    }

}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//USAMOS LA FORMA DEFINIDA POR ECMASCRIPT6
export {Pelicula}