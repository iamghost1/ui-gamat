import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdhesionAddComponent } from './adhesion/adhesion-add/adhesion-add.component';
import { RetraiteAddComponent } from './retraite/retraite-add/retraite-add.component';
import { RetraiteListComponent } from './retraite/retraite-list/retraite-list.component';
import { AdhesionListComponent } from './adhesion/adhesion-list/adhesion-list.component';


const routes: Routes = [
    { 
        path: "", 
        children: [
            {path: "list", component: AdhesionListComponent},
            {path: "add", component: AdhesionAddComponent},
        ]
    },
    { 
        path: "retraite", 
        children: [
            {path: "list", component: RetraiteListComponent},
            {path: "add", component: RetraiteAddComponent},
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdhesionRoutingModule { }
