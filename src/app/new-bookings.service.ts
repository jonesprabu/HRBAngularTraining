import { Injectable } from '@angular/core';
import { Bookings } from './bookings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewBookingsService {
 

  constructor(private http:HttpClient) { }


  RegisterNewBooking(booking:Bookings)
  {
    console.log("Register booking function called...");
    this.http.post("http://localhost:3000/booking",booking).subscribe(()=>console.log("saved successfully"));
  }

  getBookingList():Observable<any>
  {
    console.log("returning values..")
    return this.http.get('http://localhost:3000/booking');
  }

  updateBooking(editBooking: any): Observable<any> 
  {
    console.log("service........"+editBooking.id);
    return this.http.put('http://localhost:3000/booking/'+editBooking.id, editBooking);
  }

  getBooking(id: any): Observable<any> 
  {
   
    return this.http.get('http://localhost:3000/booking/'+id);
  }
}
