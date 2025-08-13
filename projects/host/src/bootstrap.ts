import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { appConfig } from 'projects/products/src/app/app.config';
import { ProductDashboardComponent } from 'projects/products/src/app/product-dashboard/product-dashboard.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
//import { AppComponent } from './app/app.component';
bootstrapApplication(ProductDashboardComponent, appConfig)
  .catch((err) => console.error(err));
