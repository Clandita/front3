import { Component } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { CommonModule, Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  imports: [CommonModule, MatCardModule ,RouterLink, MatButtonModule, MatIconModule,],
  templateUrl: './detalle-tarea.component.html',
  styleUrl: './detalle-tarea.component.scss'
})
export class DetalleTareaComponent {
  
  tareaId:number;
  tarea:Tarea;
  constructor( 
    private activatedRouter: ActivatedRoute,
    private router:Router,
    private tareaService:TareaService,
    private location: Location,

  ){
    this.activatedRouter.params.subscribe(
      params=>{
          this.tareaId =+params['id'];
          this.tarea = this.tareaService.getTareaById(this.tareaId);
      }
    )
  }
  back() {
    this.location.back();
  }



}
