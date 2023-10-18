import { Component, Input } from '@angular/core';
import { ListaAsignatura } from '../Modelos/lista-asignatura';
import { AsignaturasService } from '../Servicios/asignaturas.service';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.component.html',
  styleUrls: ['./lista-asignaturas.component.css']
})
export class ListaAsignaturasComponent {

  //Cronstructor del servicio de asignatura.
  constructor(private listaAsignaturaServicio:AsignaturasService){}

  listaAsignatura: ListaAsignatura[]=[];

  getListaAsignatura(){
    /*Se llama al método getAsignaturaServicio() del servicio listaAsignaturaServicio.
    Este método devuelve un Observable que emite una lista de asignaturas.
    se utiliza el método subscribe para suscribirse al Observable devuelto por
    getAsignaturaServicio(). Cuando el Observable emite la lista de asignaturas, 
    la función de flecha proporcionada se ejecuta y asigna esa lista a la propiedad 
    listaAsignatura del componente. Esto significa que this.listaAsignatura 
    contendrá la lista de asignaturas una vez que la suscripción se complete.*/
    this.listaAsignaturaServicio.getAsignaturaServicio().subscribe(listaAsignatura => this.listaAsignatura=listaAsignatura);
  }

  ngOnInit(){
    this.getListaAsignatura();
  }

}
