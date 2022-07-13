interface Reproductor {
    volumen: number;
    segundo: number;    
    cancion: string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;   
    anio:number;
}

const reproductor: Reproductor = {
    volumen: 30,
    segundo: 58,
    cancion: 'bebe', 
    detalles: {
        autor: 'teddys',
        anio: 2020
    }
}

const{cancion, volumen, segundo, detalles}= reproductor
const{autor} = detalles


console.log('la cacion que esta sonando es:', cancion);
console.log('Volumen actual:', volumen);
console.log('segundo de la cancion:', segundo);
console.log('el autor es:', autor);



const dbz: string[] = ['goku', 'Vegueta', 'Trunks'];
const[P1, , P3]= dbz


console.log('El personaje 1 es:', P1);
console.log('El personaje 2 es:', dbz[1]);
console.log('El personaje 3 es:', P3);
