import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroes: string[] = ['Goku', 'Supermasn', 'Spiderman'];
  heroesborrados:string = '';

  borrarHeroe():void {

    this.heroesborrados =  this.heroes.shift() || '';

    

  }
}
