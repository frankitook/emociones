import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'estadisticas',
    loadComponent: () => import('./estadisticas/estadisticas.page').then( m => m.EstadisticasPage)
  },
  {
    path: 'calendario',
    loadComponent: () => import('./calendario/calendario.page').then( m => m.CalendarioPage)
  },
  {
    path: 'ajustes',
    loadComponent: () => import('./ajustes/ajustes.page').then( m => m.AjustesPage)
  },
  {
    path: 'carga-emocion',
    loadComponent: () => import('./carga-emocion/carga-emocion.page').then( m => m.CargaEmocionPage)
  },
];
