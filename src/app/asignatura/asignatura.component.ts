import { Component } from '@angular/core';
import { Asig } from '../modelos/asignatura';
import { ServicioAsignaturaService } from '../Servicios/servicio-asignatura.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css']
})
export class AsignaturaComponent {

  asignatura: Asig[]=[];
  
constructor(private asignaturaServicio : ServicioAsignaturaService){}
 

  getAsignaturas(){
    this.asignaturaServicio.getAsignaturaServicio().subscribe( (asignatura: Asig[])=> this.asignatura= asignatura);
  }

  ngOnInit(){
    this.getAsignaturas();
  }
}
