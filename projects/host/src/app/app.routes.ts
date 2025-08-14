import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path:'host',
        component: AppComponent
    },
    {
        path: 'core',
        loadComponent: ()=> loadRemoteModule('core','./Component').then(m=>m.AppComponent)
    },
     {
        path: 'loan',
        loadComponent: ()=> loadRemoteModule('loan','./Component').then(m=>m.AppComponent)
    },
      {
        path: 'create-loan',
        loadComponent: ()=> loadRemoteModule('loan','./CreateLoan').then(m=>m.CreateLoanComponent)

        // loadComponent: ()=> loadRemoteModule('loan','./Module').then(m=>m.AppComponent)
    }
];
