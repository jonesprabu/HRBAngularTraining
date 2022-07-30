import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CabBooking } from './cab-booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl="http://localhost:3000/Bookings"

  constructor(private http: HttpClient) { }

 
  registerNewBookings(newcus: CabBooking) : void{
    this.http.post(this.apiUrl,newcus).subscribe(()=>console.log("Saved Successfully"));
  }

  getBookingList(): Observable<any> {
    console.log("service get this.getBookingList");
     return this.http.get('http://localhost:3000/Bookings');
   }

   getBooking(id: any): Observable<any> {
    console.log("service getCustomerList called");
    return this.http.get('http://localhost:3000/Bookings/'+id);
  }

   updateEmployee(customer: any): Observable<any> {
    console.log("Service.....");
    return this.http.put('http://localhost:3000/Bookings/'+customer.id,customer);
  }
}
