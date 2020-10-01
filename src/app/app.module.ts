import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StoreModule } from "./store/store.module";

/** import AmplifyUIAngularModule */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';

/** import { AppRoutingModule } from './app-routing.module'; */


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    [BrowserModule, StoreModule,AmplifyUIAngularModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
