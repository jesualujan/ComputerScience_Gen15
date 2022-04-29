//* DOCUMENTAL ES MI SUBCLASE 
import {Largometraje} from './Largometraje'

class Documental extends Largometraje {
    constructor(titulo,duracion,autor){
        super(titulo,duracion)
        this.autor=autor
    }
    //METODO
    getAuthor(){
        return this.autor=autor
    }
}

export {Documental}