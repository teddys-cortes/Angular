 function sumar (a:number, b:number): string {
    return( a + b).toString();
 }

 const resultado =  sumar(4 , 4)
 console.log(resultado)

 const sumarflecha = (a:number, b:number):number => { 
    return( a + b);
 }

 function multi(numero:number, base:number, otroNumero?:number ):number   {
    return numero + base;
 }

 const resultado2 = multi(4,  5);
console.log(resultado2)



const heroe: Personaje ={
    nombre: 'teddys',
    hp: 51,
    habilidades: ['bash', 'counter', 'healing'],
    mostrarHp(){
        console.log(heroe.nombre,'tiene', heroe.hp, 'de vida')
    }
}

heroe.mostrarHp();


function curar(personaje:Personaje, curarX:number):void{
    if(personaje.hp > 50){
    personaje.hp += curarX - 20
    console.log(personaje)
    }else{
        personaje.hp += curarX 
        console.log(personaje)
    }
}

curar(heroe, 50)