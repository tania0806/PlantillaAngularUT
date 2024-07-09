import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleDosComponent } from './module-dos.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ModuleDosComponent },
    ])],
    exports: [RouterModule]
})
export class ModuleDosRoutingModule { }
