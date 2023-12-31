import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ListaAsignatura } from '../Modelos/lista-asignatura';
import { LISTAASIGNATURAS } from '../Modelos/mock-listaAsignatura';

@Injectable({
  providedIn: 'root'
})
export class AsignaturasService {

  constructor() { }
  //Metodo que emite un observable que devuelve una lista de asignaturas.
  getAsignaturaServicio():Observable<ListaAsignatura[]>{
   const asignatura=of(LISTAASIGNATURAS);
   return asignatura;
 }
}
