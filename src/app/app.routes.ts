import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './layout/components/home/home.component';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';
import { AuthGuard } from '@Guards';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },

  // {
  //   path: 'Registro',
  //   component: RegistroComponent
  // },
  {
    path: 'home',
    component: HomeComponent,
    // canActivate:[AuthGuard],
    loadChildren: () => import('./modules/dashboard/dashboard.routes').then(m => m.routes),
  },
  {
    path: 'administracion',
    // canActivate: [authGuardFn],
    loadChildren: () => import('./modules/administracion/administracion.routes').then(m => m.routes),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
