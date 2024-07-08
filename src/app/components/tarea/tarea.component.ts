import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea.model';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'card-tarea',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatProgressBarModule, CommonModule,MatIconModule,RouterLink],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.scss'
})

export class TareaComponent {
  @Input() tarea:Tarea;


  marcarComoRealizada(tarea: any) {
    tarea.realizada = true;
  }
  marcarComoNoRealizada(tarea: any) {
    tarea.realizada = false;
  }


  constructor (private tareaService:TareaService){

  }
}
