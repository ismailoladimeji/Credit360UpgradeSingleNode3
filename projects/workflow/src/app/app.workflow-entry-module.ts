import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { AppRemoteRoutingModule } from './app.remote.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // BrowserModule,
    CommonModule,
    AppRemoteRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppRemoteModule { }
