import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { PaisesComponent } from './controller/paises/paises.component';

@NgModule({
  declarations: [
    PaisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [PaisesComponent]
})
export class AppModule { }
