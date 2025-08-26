import { Routes } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { AppComponent } from './app.component';
import { loadRemoteModule } from '@angular-architects/native-federation';

// export const routes: Routes = [
//     { path: 'product-dash', component: ProductDashboardComponent },
//     // { path: '', redirectTo: '/Home', pathMatch: 'full' }, 
//     // { path: 'Home', component: AppComponent },  
// ];


export const routes: Routes =[
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
        {
        path: 'product-dash',
        loadComponent: ()=> loadRemoteModule('products','./Component').then((m:any)=>m.AppComponent)
    }
    ]
  },
]

