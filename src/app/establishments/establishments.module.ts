import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstablishmentDetailComponent } from './establishment-detail.component';
import { EstablishmentsListComponent } from './establishments-list.component';
import { EstablishmentsRoutingModule } from './establishments-routing.module';
import { EstablishmentsService } from './establishments.service';

@NgModule({
  imports: [
    CommonModule,
    EstablishmentsRoutingModule,
    FormsModule
  ],
  exports: [
    EstablishmentsListComponent
  ],
  declarations: [
    EstablishmentsListComponent,
    EstablishmentDetailComponent
  ],
  providers: [
    EstablishmentsService
  ],
})
export class EstablishmentsModule { }
