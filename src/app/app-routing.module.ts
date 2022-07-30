import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';

const routes: Routes = [
  {
    path: 'reactiveform',
    component: ReactiveFormDemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
