import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../../models/tarea.model';
import { TareaService } from '../../services/tarea.service';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-tarea',
  templateUrl: './create-tarea.component.html',
  styleUrls: ['./create-tarea.component.scss'],
  standalone: true,
  imports:[CommonModule,
    FormsModule,
    MatFormFieldModule, 
    ReactiveFormsModule, 
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' } 
  ]
})
export class CreateTareaComponent implements OnInit {
  form: FormGroup;
  title = 'Crear tarea';
  currentProject: Tarea | null = null;
  mode: 'create' | 'update' = 'create';

  constructor(
    private formBuilder: FormBuilder,
    private tareaService: TareaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [0], 
      titulo: ['', [Validators.required, Validators.maxLength(45)]],
      fecha: ['', Validators.required],
      descripcion: [''],
      prioridad: [''],
      realizada: [false]
    });

    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        const taskId = +params['id'];
        this.currentProject = this.tareaService.getTareaById(taskId);
        if (this.currentProject) {
          this.title = 'Actualizando tarea ' + this.currentProject.titulo;
          this.form.patchValue(this.currentProject);
          this.mode = 'update';
        }
      }
    });
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const tarea: Tarea = {
      id: this.form.get('id')?.value || 0, 
      titulo: this.form.get('titulo')?.value || '',
      fecha: this.form.get('fecha')?.value || null,
      descripcion: this.form.get('descripcion')?.value || '',
      prioridad: this.form.get('prioridad')?.value || '',
      realizada: this.form.get('realizada')?.value || false
    };

    if (this.mode === 'create') {
      this.tareaService.createTarea(tarea);
    } else if (this.mode === 'update') {
      this.tareaService.updateTarea(tarea);
    }

    this.router.navigate(['/tareas']); 
  }
}
