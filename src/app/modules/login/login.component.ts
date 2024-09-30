import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { images } from '@Constants';
import { ToastrService } from 'ngx-toastr';
// Models //
import { LoginRequest } from '@Models/Auth'
// Services //
import { LoginService } from '@Services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf]
})
export class LoginComponent {
  readonly images = images;

  private fb = inject(FormBuilder);
  private auth = inject(LoginService);
  private router = inject(Router);
  private toastr = inject(ToastrService);
  
  form = this.fb.nonNullable.group({
    Correo: ['', [Validators.required]],
    Contraseña: ['', [Validators.required, Validators.minLength(6)]],
    NombreUsuario: ['', [Validators.required]],

    
  });
  
  login() {
    // Aquí se manejaría el inicio de sesión (ej: llamar a la API)
    console.log('Iniciando sesión...');
  }

  goToRegister() {
    this.router.navigate(['/Registro'])};

  onSubmit(): void {
    if (this.form.valid) {
      const { Correo, Contraseña, NombreUsuario } = this.form.getRawValue();
      const request: LoginRequest = {
        NombreUsuario : NombreUsuario,
        Correo: Correo,
        Contraseña: Contraseña
      };
      this.auth.auth(request)
        .subscribe({
          next: (res) => {
            const data = res.Response.data;
            localStorage.setItem('token', data.Token);
            localStorage.setItem('Correo', data.Usuario.Correo.toString());
            localStorage.setItem('Contraseña', data.Usuario.Contraseña.toString());
           

            if(!localStorage.getItem('mode')){
              localStorage.setItem('mode', 'light');
            }
            this.router.navigate(['/home']);
          },
          error: (err) => {
            this.toastr.error('Ha Ocurrido un Error', err);
          }
        });
    } else {
      this.form.markAllAsTouched();
    }
  }
}
