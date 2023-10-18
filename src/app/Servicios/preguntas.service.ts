import { Injectable } from '@angular/core';
import { LISTAPREGUNTAS } from '../Modelos/mock-listaPreguntas';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreguntasService {

  constructor() { }

  //Metodo que emite un observable que devuelve una lista de preguntas.
  getPreguntasServicio(){
    const preguntas=of(LISTAPREGUNTAS);
    return preguntas;
  }
}
