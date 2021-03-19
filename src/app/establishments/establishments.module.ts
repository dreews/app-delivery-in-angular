import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EstablishmentCardComponent } from './establishment-card/establishment-card.component';
import { EstablishmentDetailComponent } from './establishment-detail/establishment-detail.component';
import { EstablishmentsListComponent } from './establishments-list/establishments-list.component';
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
    EstablishmentDetailComponent,
    EstablishmentCardComponent,
  ],
  providers: [
    EstablishmentsService
  ],
})
export class EstablishmentsModule { }
