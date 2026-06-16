import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/login/login.component').then(
        (c) => c.LoginComponent,
      );
    },
  },

  {
    path: 'home',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/home/home.component').then((c) => c.HomeComponent);
    },
  },

  {
    path: 'deashboard',
    pathMatch: 'full',
    loadComponent: () => {
      return import('./pages/deashboard/deashboard.component').then(
        (c) => c.DeashboardComponent,
      );
    },
  },
];
