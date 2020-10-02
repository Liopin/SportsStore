import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";

/** import AmplifyUIAngularModule */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminComponent } from './admin/admin.component'



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent
  ],
  imports: 
    [BrowserModule, 
    StoreModule,
    AmplifyUIAngularModule,
    FormsModule, 
    ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
