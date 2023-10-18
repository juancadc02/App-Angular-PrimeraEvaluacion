import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignaturaComponent } from './asignatura/asignatura.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { InicioAppComponent } from './inicio-app/inicio-app.component';

const routes: Routes = [
  { path: '', component: InicioAppComponent },
  { path: 'Inicio', component: InicioAppComponent },
  { path: 'Asignaturas', component: AsignaturaComponent },
  { path: 'Preguntas', component: PreguntasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
