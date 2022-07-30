import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormClass } from './form-class';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl="http://localhost:3000/Bookings"

  constructor(private http: HttpClient) { }

 //to register new Booking into the db.json
  registerNewBookings(newcus: FormClass) : void{
    this.http.post(this.apiUrl,newcus).subscribe(()=>console.log("Saved Successfully"));
  }

  //to show the Booking list from the db.json
  getBookingList(): Observable<any> {
    console.log("service get this.getBookingList");
     return this.http.get('http://localhost:3000/Bookings');
   }

  //to show the details of a perticular Booking
   getBooking(id: any): Observable<any> {
    console.log("service getEmployeeList called");
    return this.http.get('http://localhost:3000/Bookings/'+id);
  }

  //to update a new Booking from the db.json
   updateBooking(customer: any): Observable<any> {
    console.log("Service.....");
    return this.http.put('http://localhost:3000/Bookings/'+customer.id,customer);
  }
}
