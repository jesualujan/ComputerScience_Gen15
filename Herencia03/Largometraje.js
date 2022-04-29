//* LARGOMETRAJE ES MI CLASE PADRE 

class Largometraje {
    constructor(titulo, duracion){
        this.titulo=titulo
        this.duracion=duracion
    }
    //? METODOS (GET -> LEER , SET -> ENVIAR / MANDAR)

    getTitle(){
        return this.titulo
    }

    getDuration(){
        return this.duracion
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CÓDIGO)
//USAMOS LA FORMA DEFINIDA POR ECMASCRIPT6
export {Largometraje}

