export interface Producto{
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "xiaomi redmi note 9 pro ++",
    precio: 10.500000,
}

const pc: Producto = {
    desc: "HP pavilon",
    precio: 19.000000,
}


export function calcularIsv(producto: Producto[]){
    let total = 0;


    producto.forEach( ({precio, desc}) => {
        total += precio;
        console.log(desc);
    })

    return [total, total * 0.15]
    
}

const articulos:Producto[] = [telefono, pc];

const [total, isv] = calcularIsv(articulos);

console.log('total:', total);
console.log('Impuesto:', isv);