import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea.model';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { TareaComponent } from '../tarea/tarea.component';
import { TareaService } from '../../services/tarea.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'listado',
  standalone: true,
  imports: [CommonModule, TareaComponent, MatFormFieldModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, JsonPipe, RouterLink],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {
  
  form: FormGroup;

  tareas: Tarea[] = [];
  filteredTareas: Tarea[] = [];
  readonly range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private tareaService: TareaService, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.tareas = this.tareaService.getTareas();
    this.filteredTareas = this.tareas;
    this.form = this.formBuilder.group({});

    this.range.valueChanges.subscribe(() => {
      this.filterTareasByDate();
    });
  }

  filterTareasByDate() {
    const rangeValue = this.range.value;
    if (rangeValue) {
      const { start, end } = rangeValue;
      if (start && end) {
        this.filteredTareas = this.tareas.filter(tarea => {
          const tareaFecha = new Date(tarea.fecha);
          return tareaFecha >= start && tareaFecha <= end;
        });
      } else {
        this.filteredTareas = this.tareas;
      }
    } else {
      this.filteredTareas = this.tareas;
    }
  }

  filterTareasByTitle(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchTerm = inputElement.value.toLowerCase();
    const rangeValue = this.range.value;
  
    if (rangeValue && rangeValue.start && rangeValue.end) {
      const { start, end } = rangeValue;
      this.filteredTareas = this.tareas.filter(tarea => {
        const tareaFecha = new Date(tarea.fecha);
        return tareaFecha >= start && tareaFecha <= end &&
          tarea.titulo.toLowerCase().includes(searchTerm);
      });
    } else {
      this.filteredTareas = this.tareas.filter(tarea =>
        tarea.titulo.toLowerCase().includes(searchTerm)
      );
    }
  }
  
  refreshPage() {
    location.reload();
  }
  trackByFn(index: any, item: any) {
    return item.id;
  }
}
