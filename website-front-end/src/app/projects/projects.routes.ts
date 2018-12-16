import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewComponent }    from './new/new.component';
import { ViewComponent } from './view/view.component';
import { ProjectsComponent } from './projects.component';

const projectRoutes: Routes = [
  { path: 'projects',  component: ProjectsComponent,
    children: [
      { path: 'new',  component: NewComponent },
      { path: 'view',  component: ViewComponent }
    ]
  }
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