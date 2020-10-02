import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store.component';
import { AdminComponent} from './store/admin.component';
/** import AmplifyUIAngularModule */
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module'



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, 
    StoreModule,
    AmplifyUIAngularModule,
    FormsModule, 
    ReactiveFormsModule, 
    AppRoutingModule,
    RouterModule.forRoot([
      {path: "store", component: StoreComponent},
      {path: "admin", component: AdminComponent},
      {path: "**", redirectTo: "/store"}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
