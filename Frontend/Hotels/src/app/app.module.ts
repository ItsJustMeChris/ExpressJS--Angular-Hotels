import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PropertyComponent } from './property/property.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PropertyViewComponent } from './property-view/property-view.component';

const appRoutes: Routes = [
  {
    path: 'properties',
    component: PropertyComponent,
    data: { title: 'Properties List' }
  },
  {
    path: 'properties/view/:id',
    component: PropertyViewComponent,
    data: { title: 'Property' }
  },
  {
    path: '',
    redirectTo: '/properties',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyComponent,
    PropertyViewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
