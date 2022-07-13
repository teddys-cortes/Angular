
//simbolo de genericos <> para cuando no sabemo el tipo de dato o el tipo de datos puede variar
function queTypoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTypoSoy('hola mundo');
let soyNumero = queTypoSoy(300);
let soyArray = queTypoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);

//para decir que es explicito el tipo de dato
let soyExplicito = queTypoSoy<number>(300);