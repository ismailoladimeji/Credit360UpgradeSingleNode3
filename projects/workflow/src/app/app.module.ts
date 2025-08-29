import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppRemoteModule } from './app.workflow-entry-module';

@NgModule({
  declarations: [
    // AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRemoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
