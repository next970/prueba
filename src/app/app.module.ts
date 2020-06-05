import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LenguajesComponent } from './componentes/lenguajes/lenguajes.component';
import { AppRoutingModule } from './app-routing.module';
import { EDUARDOComponent } from './componentes/eduardo/eduardo.component';
import { DetallesLenguajeComponent } from './componentes/detalles-lenguaje/detalles-lenguaje.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    LenguajesComponent,
    EDUARDOComponent,
    DetallesLenguajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
