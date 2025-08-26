import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AppComponent } from './app.component';

export const routesArr: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'admin/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'admin/dashboard',
        loadComponent: () => import('./pages/admin-dashboard/admin-dashboard.component').then((c) => c.AdminDashboardComponent)
      }
    ]
  },
];
