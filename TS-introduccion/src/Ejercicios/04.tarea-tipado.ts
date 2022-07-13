
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: {calle:number, pais:string, ciudad:string},
    mostrarDireccion: () => string
}

const superHeroe: SuperHeroe = {
    nombre: 'spiderman',
    edad: 30,

    direccion: {
        calle: 60,
        pais: 'col',
        ciudad: 'barranquilla'
    },

    mostrarDireccion(){
        return this.nombre+ ', ' + this.direccion.ciudad + ', ' + this.direccion.pais + ', ' + this.direccion.calle
    }
}


const direccion = superHeroe.mostrarDireccion();
console.log(direccion);