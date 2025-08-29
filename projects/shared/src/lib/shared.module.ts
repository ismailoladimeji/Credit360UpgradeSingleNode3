import { NgModule } from "@angular/core";
import { SweetAlertComponent } from './sweet-alert/sweet-alert.component';
import { provideSweetAlert2 } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    // CommonComponent,
    // SharedPipe
  ],
  imports: [
    //CommonModule
    SweetAlertComponent
   ]
    ,
  exports: [
    SweetAlertComponent
    // CommonComponent,
    // SharedPipe
  ],
   providers: [
    provideSweetAlert2()
  ],
})
export class SharedModule {}
