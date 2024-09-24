import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
 Nombres: string= "";
 Apellidos: string="";
 Correo: string="";
 Constraseña: string="";
 NumeroTelefono: string="";

 constructor(private router: Router) {}

 register() {
   if (this.Constraseña === this.Constraseña) {
     // Aquí se manejaría el registro (ej: llamar a la API)
     console.log('Registrando usuario...');
   } else {
     alert('Las contraseñas no coinciden');
   }
 }

 goToLogin() {
   this.router.navigate(['/login']);
 }
}
