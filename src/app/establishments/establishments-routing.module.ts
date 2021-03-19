import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstablishmentsListComponent } from './establishments-list.component';
import { EstablishmentDetailComponent } from './establishment-detail.component';

const establishmentsRoutes: Routes = [
  {
    path: 'estabelecimentos',
    component: EstablishmentsListComponent,
  },
  {
    path: 'estabelecimento/salvar',
    component: EstablishmentDetailComponent,
  },
  {
    path: 'estabelecimento/detalhe/:id',
    component: EstablishmentDetailComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(establishmentsRoutes)
  ],
  exports: [
    RouterModule
  ],
})
export class EstablishmentsRoutingModule { }
