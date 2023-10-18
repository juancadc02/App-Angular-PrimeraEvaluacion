import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListaPreguntasComponent } from './lista-preguntas/lista-preguntas.component';
import { ListaAsignaturasComponent } from './lista-asignaturas/lista-asignaturas.component';
import { HeaderComponent } from './header/header.component';
import { InicioAppComponent } from './inicio-app/inicio-app.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsignaturaComponent,
    PreguntasComponent,
    ListaPreguntasComponent,
    ListaAsignaturasComponent,
    InicioAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
