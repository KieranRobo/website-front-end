import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewComponent }    from './new/new.component';

const projectRoutes: Routes = [
  { path: 'projects/new',  component: NewComponent }
];

//taken from angular.io
//Only call RouterModule.forRoot in the root AppRoutingModule (or the AppModule if 
//that's where you register top level application routes). In any other module, you 
//must call the RouterModule.forChild method to register additional routes.

@NgModule({
  imports: [
    RouterModule.forChild(projectRoutes)
  ],
  exports: [
    RouterModule,

  ]
})
export class ProjectRoutingModule { }