import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModuleUnoComponent } from './module-uno.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ModuleUnoComponent },
    ])],
    exports: [RouterModule]
})
export class ModuleUnoRoutingModule { }
