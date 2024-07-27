import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: '',
      loadComponent: () => import('./alumnos.component').then(m => m.AlumnoComponent)
    }
    // {
    //   path: ':id',
    //   loadComponent: () => import('./pages/form/form.component')
    // }
  ];