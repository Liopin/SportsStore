import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { StoreComponent } from "./store.component";
import { AdminComponent } from "./admin.component";

@NgModule({
    declarations: [
      StoreComponent,
      AdminComponent
    ],
    exports: [
      StoreComponent,
      AdminComponent
    ],
    imports: [
        BrowserModule,
        AmplifyUIAngularModule,
        FormsModule,
        ReactiveFormsModule
      ],
    providers: [],
    bootstrap: [StoreComponent]
})

export class StoreModule{}