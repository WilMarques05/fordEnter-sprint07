import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';
import { LoginComponent } from './pages/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [

  {
    path: '', component: LoginComponent
  },

    {
    path: '',
    component: MenuComponent, // O layout global gerencia o menu lateral
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },

    { path: '**', redirectTo: 'login' }


  // {
  //   path: '',
  //   pathMatch: 'full',
  //   loadComponent: () => {
  //     return import('./pages/login/login.component').then(
  //       (c) => c.LoginComponent,
  //     );
  //   },
  // },

  // {
  //   path: 'home',
  //   pathMatch: 'full',
  //   canActivate: [loginGuard],
  //   loadComponent: () => {
  //     return import('./pages/home/home.component').then((c) => c.HomeComponent);
  //   },
  // },

  // {
  //   path: 'dashboard',
  //   pathMatch: 'full',
  //   canActivate: [loginGuard],
  //   loadComponent: () => {
  //     return import('./pages/dashboard/dashboard.component').then(
  //       (c) => c.DashboardComponent,
  //     );
  //   },
  // },
];
