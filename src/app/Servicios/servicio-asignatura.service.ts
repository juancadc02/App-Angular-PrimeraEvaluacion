import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Asig } from '../modelos/asignatura';
import { ASIGNATURAS } from '../modelos/mock-asignatura';

@Injectable({
  providedIn: 'root'
})
export class ServicioAsignaturaService {

  constructor() { }

  //Metodo para devolver la lista de asignaturas.
  getAsignaturaServicio():Observable<Asig[]>{
    const asignatura=of(ASIGNATURAS);
    return asignatura;
  }
 
}
