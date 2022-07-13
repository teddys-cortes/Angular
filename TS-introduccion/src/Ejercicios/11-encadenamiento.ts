interface Pasajero{
    nombre: string;
    hijo?: string[];
}


const pasajero1: Pasajero = {   
    nombre: 'Teddys',
}

const pasajero2: Pasajero = {
     nombre: 'Teddys', 
     hijo:  ['anuel', 'carolG']
}

function imprimirHijos(pasajero:Pasajero): void {
    console.log(pasajero.hijo.length);
}
imprimirHijos(pasajero1)