
/*
    ===== Código de TypeScript =====
*/
//arreglo definido
let habilidades:(string | number)[] = ["php", "JS", 34];
habilidades.push("teddys", 34)


//para definir los atributos del objeto
interface personaje{
    nombre: string ;
    edad: number;
    habilidades: string[] 

    //no es requerido por personaje ? osea es opcional 
    cuidadNatal?: string;
}

//construir el objeto y darle valores
const personaje: personaje = {
    nombre: "teddys",
    edad: 21,
    habilidades: ["java", "php" ]
}

//impresion por consola el personaje
// console.log(personaje);

//impresion por tabla
console.table(personaje);

