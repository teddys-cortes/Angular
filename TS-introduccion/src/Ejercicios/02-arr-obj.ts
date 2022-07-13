let habilidades: string[] = ['Fuerza', 'velocidad'];

interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
    mostrarHp?: () => void;
}

const villano: Personaje ={
    nombre: 'teddys',
    hp: 300,
    habilidades: ['bash', 'counter', 'healing']

}

console.log(villano);