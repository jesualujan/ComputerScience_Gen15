//* NO ES UNA SUPER CLASE NI UNA SUBBLASE
// ES SOLO UNA CLASE 
class Sala {
    constructor(numSala, cantGente, largometraje){
        this.numSala=numSala
        this.cantGente=cantGente
        this.largometraje=largometraje
    }
    //METODOS 
    setMovie(){
      return "Se está reproduciendo: " + this.largometraje.getTitle() + 
                    "Duración " + this.largometraje.getDuration();
                }
    getPeople(){
       return this.cantGente
    }
    getSalaNumber(){
        return this.numSala
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//USAMOS LA FORMA DEFINIDA POR ECMASCRIPT6
export {Sala}