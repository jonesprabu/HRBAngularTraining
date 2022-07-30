import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingService } from './booking.service';
import { ReactiveFormDemoComponent } from './reactive-form-demo/reactive-form-demo.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormDemoComponent,
    BookingEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
