import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routesArr: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'createworkflow',
        pathMatch: 'full'
      },
      {
        path: 'createworkflow',
        loadComponent: () =>
          import('./pages/createworkflow/createworkflow.component').then((c) => c.CreateworkflowComponent)
      }
    ]
  },
   {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'approveworkflow',
        pathMatch: 'full'
      },
      {
        path: 'approveworkflow',
        loadComponent: () =>
          import('./pages/approveworkflow/approveworkflow.component').then((c) => c.ApproveworkflowComponent)
      }
    ]
  },
];
