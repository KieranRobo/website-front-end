import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './component/angular/angular.component';
import { HomeComponent } from './component/home/home.component';
import { ContactComponent } from './component/contact/contact.component';



const appRoutes: Routes = [
  { path: '',
  redirectTo: '/home',
  pathMatch: 'full'
  },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'angular', component: AngularComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent, pathMatch: 'full' }
];

@NgModule({

  declarations: [
    AppComponent,
    AngularComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
