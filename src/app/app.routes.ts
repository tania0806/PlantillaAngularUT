import { Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './layout/components/home/home.component';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) }
    ]
  },
  {
    path: 'modulo-uno',
    component: HomeComponent,
    children:[
      { path: '',  loadChildren: () => import('./modules/module-uno/module-uno-routing.module').then(m => m.ModuleUnoRoutingModule)},
    ]
  },
  {
    path: 'modulo-dos',
    component: HomeComponent,
    children:[
      { path: '',  loadChildren: () => import('./modules/module-dos/module-dos-routing.module').then(m => m.ModuleDosRoutingModule)},
    ]
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
