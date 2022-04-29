//* PARTIDO ES MI SUBCLASE
import {Largometraje} from './Largometraje'

class Partido extends Largometraje {
    constructor(titulo,duracion,equipo){
        super(titulo,duracion)
        this.equipo=equipo
    }
    //METODO
    getTeam(){
        return this.equipo
    }
}

export {Partido}

