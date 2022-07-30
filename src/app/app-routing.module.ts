import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingEditComponent } from './booking-edit/booking-edit.component';

const routes: Routes = [
  {
     path: 'showBookingEditForm/:id',
     component: BookingEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
