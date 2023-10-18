import { Component } from '@angular/core';
import { ListaAsignatura } from '../Modelos/lista-asignatura';
import { AsignaturasService } from '../Servicios/asignaturas.service';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.component.html',
  styleUrls: ['./lista-asignaturas.component.css']
})
export class ListaAsignaturasComponent {

  constructor(private listaAsignaturaServicio:AsignaturasService){}

  listaAsignatura: ListaAsignatura[]=[];

  getListaAsignatura(){
    this.listaAsignaturaServicio.getAsignaturaServicio().subscribe(listaAsignatura => this.listaAsignatura=listaAsignatura);
  }

  ngOnInit(){
    this.getListaAsignatura();
  }

}
