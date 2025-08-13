import { Routes } from '@angular/router';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
     { path: 'product-dash', component: ProductDashboardComponent },
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
   
    { path: 'Home', component: AppComponent },


  
];
