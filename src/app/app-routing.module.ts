import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';



const routes: Routes = [
  {
    path:'reactiveformcomponent',
    component:ReactiveFormDemoComponent
  },
  {
    path:'Customerdashboard',
    component:DashboardComponent
  }
];
@NgModule({
  
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
