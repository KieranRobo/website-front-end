import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';

import { ProjectRoutingModule } from './projects.routes';
import { ViewComponent } from './view/view.component';
import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [NewComponent, ViewComponent, ProjectsComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ],
  exports: [
    ProjectsComponent
  ]
})

export class ProjectsModule { }

export {ProjectsComponent}
