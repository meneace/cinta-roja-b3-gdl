class Persona{

    //Definimos propiedades iniciales de mi objeto
    constructor(name,age,phone,email){
        this.nombre = name;
        this.edad = age;
        this.telefono = phone;
        this.email = email;
    }

    //Función que define el saludo de una persona
    presentarse(){
        console.log(`Holla me llamo ${this.nombre} y
         tengo ${this.edad}`);
    }
}


const jose = new Persona("Jose",32,5544332211,"jose@devf.mx");
const daniel = new Persona("Daniel",21,66554433,"daniel@devf.mx");

jose.presentarse();
daniel.presentarse();


class Cajero extends Persona{

    constructor(name,age,phone,email,id){
        super(name,age,phone,email);
        this.id = id;
    }

    recibirDinero(dinero){
        this.presentarse();
        console.log(`y estoy recibiendo $${dinero}pesos`);
    } 
    
}

const Laura = new Cajero("Laura",31,543218482,"laura@gmail.com",12);
Laura.recibirDinero(199999);






