import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRemoteRoutingModule } from './app-remote-routing.module';


@NgModule({
  declarations: [
        AppComponent
  ],
  imports: [
// BrowserModule,
    AppRemoteRoutingModule,
    CommonModule
  ],
  exports:[AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRemoteModule { }
