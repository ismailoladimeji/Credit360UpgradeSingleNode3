import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { CommonModule } from '@angular/common';
import { AppRemoteModule } from './app.remote-entry-module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
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
