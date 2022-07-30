import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Taxireg } from './taxireg';
@Injectable({
  providedIn: 'root'
})
export class TaxiserviceService {

  constructor(private http: HttpClient) { }

  saveCustomer(taxiService:Taxireg):void{
    console.log("Cus service save customer method called service called.....");
    console.log(taxiService.Email);
    console.log(taxiService.Name);
    console.log(taxiService.Phone);
    console.log(taxiService.TaxiType);
    console.log(taxiService.Extras);
    console.log(taxiService.PickupPlace);
    console.log(taxiService.DropoffPlace);
    console.log(taxiService.SpecialInstructions);

    this.http.post("http://localhost:3000/customers",taxiService).subscribe(()=>
    console.log("Saved Successfully"));
  }

 
getCustomerList(): Observable<any> {
 console.log("service getCustomerList called");
 return this.http.get('http://localhost:3000/customers');
 }
 getCustomer(id: any): Observable<any> {
  console.log("service getCustomer called");
  return this.http.get('http://localhost:3000/customers' + id);
 }
}

