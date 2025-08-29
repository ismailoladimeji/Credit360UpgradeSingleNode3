import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routesArr } from './workflow.routes';

const routes: Routes = [
  ...routesArr
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
