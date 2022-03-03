
/*
    ===== Código de TypeScript =====
*/

//dos puntos despues de la variables es para especificar que tipo son
function restar (a: number, B:number){
    return (a - B).toString;
}


//los dos puntos despues del parentesis indican lo que se va a retornar
function sumar (a: number, B:number): number{
    return a + B;
}

//tipo flecha 
const sumarFlecha = (a, b) => {
    return a + b;
} 

const sumarFlecha2 = (a:number, b:number):number => {
    return a + b;
} 


//la variable que esopcional no puede ir por delnate nunca de una requeria al menos que le de un valor inicial
function multiplicar(numero1: number, numero2?: number, base:number = 2):number{
    return numero1 * base;
}

const resultado2 = multiplicar(3,4);
console.log("el resultado de la multiplicacion es "+ resultado2)


const resultado = sumar(3,4);
console.log("el resultado es :" + resultado);
