import { Routes } from '@angular/router';
import { ProductDashboardComponent } from './pages/product-dashboard/product-dashboard.component';
import { AppComponent } from './app.component';
//import { loadRemoteModule } from '@angular-architects/native-federation';

// export const routes: Routes = [
//     { path: 'product-dash', component: ProductDashboardComponent },
//     // { path: '', redirectTo: '/Home', pathMatch: 'full' }, 
//     // { path: 'Home', component: AppComponent },  
// ];


export const productRouteArr: Routes =[
  {
    path: '',
   // component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'products/product-dashboard',
        pathMatch: 'full'
      },
        {
        path: 'products/product-dashboard',
        loadComponent: ()=> import('./pages/product-dashboard/product-dashboard.component').then((m:any)=>m.ProductDashboardComponent)
    }
    ]
  },
]

