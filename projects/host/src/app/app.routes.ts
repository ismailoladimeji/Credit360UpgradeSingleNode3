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
        path: 'products',
        loadComponent: ()=> loadRemoteModule('products','./Component').then(m=>m.AppComponent)
    }
    ,
        {
        path: 'dashboard',
        loadComponent: ()=> loadRemoteModule('dashboard','./Component').then(m=>m.AppComponent)
    }
];
