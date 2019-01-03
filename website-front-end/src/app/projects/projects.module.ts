import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';

import { ProjectRoutingModule } from './projects.routes';
import { ViewComponent } from './view/view.component';
import { ProjectsComponent } from './projects.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [NewComponent, ViewComponent, ProjectsComponent, EditComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    FormsModule
  ],
  exports: [
    ProjectsComponent
  ]
})

export class ProjectsModule { }

export {ProjectsComponent}
