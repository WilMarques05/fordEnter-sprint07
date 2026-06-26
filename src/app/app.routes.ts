import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';

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
    path: '',
    loadComponent: () => {
      return import('./components/menu/menu.component').then(
        (c) => c.MenuComponent,
      );
    },
    canActivateChild: [loginGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => {
          return import('./pages/home/home.component').then(
            (c) => c.HomeComponent,
          );
        },
      },

      {
        path: 'dashboard',
        loadComponent: () => {
          return import('./pages/dashboard/dashboard.component').then(
            (c) => c.DashboardComponent,
          );
        },
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ],
  },
  {
    path: '**',
    redirectTo: ''
  }
];
