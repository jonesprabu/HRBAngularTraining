import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TaxiBooking } from './taxi-booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  registerNewBookings(taxi: TaxiBooking): void {



    this.http.post("http://localhost:3000/customers",taxi).subscribe(()=>console.log("saved successfully"));

    console.log("After post service");
  }
  getCusDetails(): Observable<any>
  {
    console.log("Service GetCusDetails Called");
    return this.http.get('http://localhost:3000/customers');

  }
}
