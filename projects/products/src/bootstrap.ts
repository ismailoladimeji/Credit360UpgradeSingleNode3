import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { ProductDashboardComponent } from './app/product-dashboard/product-dashboard.component';
//import { AppComponent } from './app/app.component';

bootstrapApplication(ProductDashboardComponent, appConfig)
  .catch((err) => console.error(err));
