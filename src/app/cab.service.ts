import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookingCab } from './booking-cab';


@Injectable({
  providedIn: 'root'
})
export class CabService {

  apiUrl = "http://localhost:3000/customers";



  constructor(private http: HttpClient) { }

  registerNewCab(cus: BookingCab): void {
  
    this.http.post("http://localhost:3000/customers",cus).subscribe(()=>console.log("saved successfully"));
    console.log("After post service");




  }
  getCusDet(): Observable<any>
  {
      console.log("service getEmployeeList called");
      return this.http.get('http://localhost:3000/customers');
  }
  
 
}
