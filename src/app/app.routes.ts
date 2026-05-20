import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () =>
      import('./layout/users/user-layout/user-layout.component')
      .then(m => m.UserLayoutComponent),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/user/home/home.component')
          .then(m => m.HomeComponent)
      }
    ]
  },

  {
    path: 'admin',
    loadComponent: () =>
      import('./layout/admin/admin-layout/admin-layout.component')
      .then(m => m.AdminLayoutComponent),

    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./features/admin/dashboard/dashboard.component')
          .then(m => m.DashboardComponent)
      }
    ]
  }

];
