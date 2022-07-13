
class PersonaNormal  {

constructor (
    public direccion: string, 
    public nombre: string
    ){
        
    }
}

class Heroe extends PersonaNormal {
    // nombre: string;
    // apellido: string;
    // numero: number;

    constructor (
        public nombre: string, 
        public apodo: string, 
        public nombreReal: string)
        {
            super('calle 18', nombre);
             // this.nombre = nombre;
            // this.apellido = apellido;
            // this.numero = numero;   
        }
 }

const superman = new Heroe('superman ', 'Hombre de acero', 'Santiago');

console.log(superman);