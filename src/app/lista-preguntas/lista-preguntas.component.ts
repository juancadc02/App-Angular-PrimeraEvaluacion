import { Component } from '@angular/core';
import { PreguntasService } from '../Servicios/preguntas.service';
import { ListaPreguntas } from '../Modelos/lista-preguntas';

@Component({
  selector: 'app-lista-preguntas',
  templateUrl: './lista-preguntas.component.html',
  styleUrls: ['./lista-preguntas.component.css']
})
export class ListaPreguntasComponent {

  constructor(private listaPreguntaServicio :PreguntasService ){}

  listaPreguntas:ListaPreguntas[]=[];

  getListaPreguntas(){
    this.listaPreguntaServicio.getPreguntasServicio().subscribe(listaPreguntas => this.listaPreguntas=listaPreguntas);
  }

  ngOnInit(){
    this.getListaPreguntas();
  }
}
