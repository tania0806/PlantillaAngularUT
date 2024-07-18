import { NgFor, NgIf } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomTableComponent } from '@Component/Table'
import { PersonaModel, PersonInsertRequest } from '@Models/Person';
import { PerfilModel } from '@Models/Profile';
import { TiendaModel } from '@Models/Store';
import { PersonasService, StoresService, PerfilesService } from '@Services';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, CustomTableComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.css'
})
export class PersonasComponent {
  private fb = inject(FormBuilder);
  private personService = inject(PersonasService);
  private profileService = inject(PerfilesService);
  private storeService = inject(StoresService);

  idUsuario:number = 0;
  persons = signal<PersonaModel[]>([]);
  personsList: PersonaModel[] = [];
  profilesList: PerfilModel[] = [];
  storesList: TiendaModel[] = [];

  form = this.fb.nonNullable.group({
    nombre: ['', [Validators.required]],
    apPaterno: ['', [Validators.required]],
    apMaterno: ['', [Validators.required]],
    idPerfil: ['', [Validators.required]],
    idSede: ['', [Validators.required]],
    porcentaje: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.idUsuario = Number(localStorage.getItem('idUsuario'))
    this.getPersons();
    this.getProfiles();
    this.getStores();
  }

  getPersons() {
    this.personService.getPersons().subscribe((data) => {
      this.persons.set(data.response.data);
      this.personsList = data.response.data;
    });
  }

  getProfiles() {
    this.profileService.getProfiles().subscribe((data) => {
      this.profilesList = data.response.data;
    });
  }

  getStores() {
    this.storeService.getStores().subscribe((data) => {
      this.storesList = data.response.data;
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const { nombre, apPaterno, apMaterno, idPerfil, idSede, porcentaje } = this.form.getRawValue();
      const request: PersonInsertRequest = {
        Id: 0,
        IdUsuario: 0,
        Nombre: nombre,
        ApPaterno: apPaterno,
        ApMaterno: apMaterno,
        Perfil: Number(idPerfil),
        IdSede: Number(idSede),
        NombreUsuario: null,
        NombreSede: null,
        Usuario: this.idUsuario,
        Activo: 0,
        Porcentaje: Number(porcentaje)
      };
      this.personService.insertPersons(request)
        .subscribe({
          next: (res) => {
            const data = res;
            this.getPersons();
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

  editPerson(data:any){
    console.log(data)
  }

  deletePerson(id:number){
    console.log(id)
  }
}
