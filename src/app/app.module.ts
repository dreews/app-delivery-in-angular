import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstablishmentsModule } from './establishments/establishments.module';
import { DialogService } from './services/dialog.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    EstablishmentsModule,
    FormsModule,
  ],
  declarations: [AppComponent],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
