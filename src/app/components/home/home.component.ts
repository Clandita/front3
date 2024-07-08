import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';
import { TareaService } from '../../services/tarea.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,TareaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  tareas: Tarea[]=[];
  constructor(private tareaService:TareaService){

  }
  ngOnInit():void{
    this.tareas = this.tareaService.getTareas();
  }

  fechaActual(fecha: Date) {
    const hoy=new Date();
    const inicio_semana=new Date(hoy.setDate(hoy.getDate()-hoy.getDay()+1));
    const final_semana= new Date(hoy.setDate(hoy.getDate()-hoy.getDay()+7));

    hoy.setDate(hoy.getDate()-(hoy.getDay()===0?6:hoy.getDay()-1));

    const fecha_tarea= new Date(fecha);

    return fecha_tarea >=inicio_semana && fecha_tarea <=final_semana;
    
  }


}
