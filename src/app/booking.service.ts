import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { BookTaxi } from './book-taxi';



@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  registerNewBookings(taxi: BookTaxi): void {

    this.http.post("http://localhost:3000/customers",taxi).subscribe(()=>console.log("saved successfully"));
    console.log("After post service");

}
getRegDetails(): Observable<any>
{
  console.log("Service getRegDetails Called");
  return this.http.get('http://localhost:3000/customers');
}
}