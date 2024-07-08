import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Tarea } from '../../models/tarea.model';
import { CommonModule, Location } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-tarea',
  standalone: true,
  providers:[provideNativeDateAdapter()],
  imports: [RouterLink,CommonModule,MatFormFieldModule,ReactiveFormsModule,MatInputModule,MatButton,MatDatepickerModule,MatSliderModule,MatIconModule],
  templateUrl: './create-tarea.component.html',
  styleUrl: './create-tarea.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateTareaComponent {


  form:FormGroup;
  title:"crear";
  currentTarea:Tarea;
  constructor(
 
    private formBuilder:FormBuilder,
    private location: Location,
    private tareaService: TareaService,
    private snackBar: MatSnackBar
  )
  {

    this.form = this.formBuilder.group({
      id:['',[Validators.required]],
      titulo:['',[Validators.required, Validators.maxLength(45)]],
      fecha:['',[Validators.required]],
      descripcion:['',[Validators.minLength(2),
        Validators.maxLength(100)]],
      prioridad:[Validators.required],
      estado:[Validators.required]
    });

    this.form.valueChanges.subscribe(values=>{
      console.log(values)
    })
  }

  save() {
    if (this.form.valid) {
      const tarea: Tarea = this.form.value;
      this.form.reset(); 
    } else {
      this.form.markAllAsTouched(); 
    }
  }

  back(): void {
    this.location.back();
  }

  

}
