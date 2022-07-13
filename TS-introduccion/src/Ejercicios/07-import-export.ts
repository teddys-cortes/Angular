import { calcularIsv, Producto } from "./06-desestruturacion-funciones";



const carritoCompra: Producto[] = [
    {
        desc: 'telefono',
        precio: 100
    },

    {
        desc: 'telefono2',
        precio: 200
    },

    {
        desc: 'telefono3',
        precio: 150
    }
];

// function calcularIsv(compra: Producto[]) {
//    let total = 0;


//     compra.forEach(({precio}) => {
//         total += precio 
//     })

//     return [total, total * 0.15]    
// }

const [total, isv] = calcularIsv(carritoCompra);

console.log('total:', total)
console.log('isv:', isv)