//VAMOS A CREAR NUESTRA CLASE Y NUESTROS OBJETOS - CLASE PERSONA 

class Persona {
         //es el scope local 
       // instaciar un objeto, o bien un nuevo objeto a partir de uno ya creado. 
       // solo pueden tener un constructor por cada clase.  
    constructor(nombre,apellido,edad,pais,ocupacion){       
      //THIS NOS SRIVE PARA HACER UNA REFERENCIA A UNA PROPIEDAD DEL OBJETO 
      // LO INVOCAMOS HASTA EL PRINCIPIO DE LA CLASE, ESTE PRESENTE EN TODO EL CÓDIGO  
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.pais=pais
        this.ocupacion=ocupacion
    }

    //METODOS 
    Saludar(){
        return `HOLA MI NOMBRES ES ${this.nombre} ${this.apellido} y tengo ${this.edad} años `
    }

    Hablar(){
        return "bla bla bla estoy tarareando"
    }

    Accion(){
        return "hola soy " + " " + this.nombre + " " + this.Hablar()     
    }

}

// HARCOEADO - NOSOTROS VAMOS A PASARLE LA INFORMACIÓN 
//INSTACIAR NUESTROS OBJETOS DE LA CLASE 
const personaUno = new Persona('CESAR','GARCIA',28,'COLOMBIA','PROFESOR')  
const personaDos = new Persona('RENE','MANZANO',30,'MEXICANO','PROFESOR')
const personaTres = new Persona('ESTEBAN','GONZALEZ',20,'COLOMBIA','ESTUDIANTE')

//console.log(personaUno, personaDos, personaTres)
console.log(personaUno.Saludar())
console.log(personaDos.Accion())
