import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './component/angular/angular.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';

import { HttpClientModule } from '@angular/common/http';

import { ProjectsModule } from './projects/projects.module';
import { ViewProjectComponent } from './component/view-project/view-project.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { DeleteProjectDialog } from './projects/view/view.component';




const appRoutes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'angular', component: AngularComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' },
  { path: 'p/:link',  component: ViewProjectComponent }
];

@NgModule({

  declarations: [
    AppComponent,
    AngularComponent,
    HomeComponent,
    ContactComponent,
    ViewProjectComponent,
    DeleteProjectDialog
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ProjectsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DeleteProjectDialog]
})
export class AppModule { }
