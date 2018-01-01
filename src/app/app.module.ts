import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule, Routes} from '@angular/router';

import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './ram/welcome/welcome.component';
import { Error404Component } from './ram/error404/error404.component';
import { ContactComponent } from './ram/contact/contact.component';
import { NavComponent } from './ram/share/nav/nav.component';
import { FooterComponent } from './ram/share/footer/footer.component';
import { ProductModule } from './ram/product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    Error404Component,
    ContactComponent,
    NavComponent,
    FooterComponent
    
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    // routers
    RouterModule.forRoot([
      { path: 'dashboard', component: WelcomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: '**', component: Error404Component, pathMatch: 'full' }
    ]),
    // router end here 
    ProductModule
  ],
 // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
