import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gestion-citas',
    loadComponent: () => import('./paginas/gestion-citas/gestion-citas.page').then( m => m.GestionPage)
  },
  {
    path: 'configuraciones',
    loadComponent: () => import('./paginas/configuraciones/configuraciones.page').then( m => m.ConfiguracionesPage)
  },
];
