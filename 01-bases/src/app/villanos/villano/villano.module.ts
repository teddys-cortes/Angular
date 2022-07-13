import { CommonModule } from '@angular/common';
import {NgModule} from  '@angular/core'
import { VillanoComponent } from './villano.component';


@NgModule ({
    declarations:[
        VillanoComponent
    ],

    exports:[
        VillanoComponent
    ],

    imports:[
        CommonModule
    ],

})

export class VilanoModule{

    

}