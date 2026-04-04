import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'realisations',
    loadComponent: () => import('./pages/realisations/realisations.component').then(m => m.RealisationsComponent)
  },
  {
    path: 'realisations/:slug',
    loadComponent: () => import('./pages/chantier-detail/chantier-detail.component').then(m => m.ChantierDetailComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
