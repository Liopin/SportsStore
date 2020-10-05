import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'store', component: StoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})


export class AppRoutingModule { }
export const routingComponents =  [ AppComponent,AdminComponent,StoreComponent]
