import { NgModule } from "@angular/core"
import { ContadorComponent } from "./contador/contador.conponet";
import { CommonModule } from '@angular/common';

@NgModule({

    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports: [
        CommonModule
    ]

})
export class ContadoresModule {

}