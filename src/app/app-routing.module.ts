import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'store',component: StoreComponent}, 
  { path: 'admin',component: AdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})


export class AppRoutingModule { }
export const routingComponents =  [StoreComponent, AdminComponent]
