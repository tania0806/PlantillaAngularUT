import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '@Component/Table'
import { PersonaModel, PersonInsertRequest } from '@Models/Person';
import { AlumnoInsertRequest, AlumnoModel, GetAlumnoResponse } from 'src/app/core/models/Alumnos';
import { PerfilModel } from '@Models/Profile';
import { TiendaModel } from '@Models/Store';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';
import { AlumnoService } from 'src/app/core/services/alumnos.service';
import { alumnos } from '@Global/endpoints';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, CustomTableComponent],
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.css'
})
export class AlumnoComponent {
  private fb = inject(FormBuilder);
  private AlumnoService = inject(AlumnoService);
 

  idUsuario:number = 0;
  alumnos = signal<AlumnoModel[]>([]);
  alumnoList: AlumnoModel[] = [];
  profilesList: PerfilModel[] = [];
  storesList: TiendaModel[] = [];

  form = this.fb.nonNullable.group({
    matricula:['',[Validators.required]],
    nombre: ['', [Validators.required]],
    apPaterno: ['', [Validators.required]],
    apMaterno: ['', [Validators.required]],
    direccion: ['', [Validators.required]],
   
  });

  

  getAlumnno() {
    this.AlumnoService.getAlumno().subscribe((data) => {
      this.alumnos.set(data.response.data);
      this.alumnoList = data.response.data;
    });
  }

  

  onSubmit(): void {
    if (this.form.valid) {
      const { matricula, nombre, apPaterno, apMaterno, direccion } = this.form.getRawValue();
      const request: AlumnoInsertRequest = {
        Id: 0,
        Matricula: 0,
        Nombre: nombre,
        ApPaterno: apPaterno,
        ApMaterno: apMaterno,
        Direccion: direccion,
       
      };
      this.AlumnoService.insertAlumno(request)
        .subscribe({
          next: (res) => {
            const data = res;
            this.getAlumnno();
          },
          error: (err) => {
            console.log(err)
            // this.toastr.error('Ha Ocurrido un Error', err);
          }
      });
    } else {
      this.form.markAllAsTouched();
    }
  }

  editAlumno(data:any){
    console.log(data)
  }

  deleteAlumno(id:number){
    console.log(id)
  }
}
