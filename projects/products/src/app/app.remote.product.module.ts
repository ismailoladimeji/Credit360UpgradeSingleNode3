import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRemotePoductRoutingModule } from './app.remote.product.routing';



@NgModule({
  declarations: [
        AppComponent
  ],
  imports: [
// BrowserModule,
   
    CommonModule,
    AppRemotePoductRoutingModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRemoteModule { }
