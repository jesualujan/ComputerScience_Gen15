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

    }

    Hablar(){

    }

    Saludar(){

    }

}

// HARCOEADO - NOSOTROS VAMOS A PASARLE LA INFORMACIÓN 
//INSTACIAR NUESTROS OBJETOS DE LA CLASE 
const personaUno = new Persona('CESAR','GARCIA',28,'COLOMBIA','PROFESOR')  
console.log(personaUno)