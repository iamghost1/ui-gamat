import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AdhesionComponent } from './adhesion.component';
import { AdhesionRoutingModule } from './adhesion-routing.module';
import { AdhesionAddComponent } from './adhesion/adhesion-add/adhesion-add.component';
import { RetraiteAddComponent } from './retraite/retraite-add/retraite-add.component';
import { RetraiteListComponent } from './retraite/retraite-list/retraite-list.component';
import { AdhesionListComponent } from './adhesion/adhesion-list/adhesion-list.component';


@NgModule({
  declarations: [
    AdhesionComponent,
    AdhesionAddComponent,
    RetraiteAddComponent,
    RetraiteListComponent,
    AdhesionListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdhesionRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class AdhesionModule { }
