import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookingService } from '../booking.service';
import { CabBooking } from '../cab-booking';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  myForm!: FormGroup;
  cus: CabBooking = new CabBooking();

  BookList: CabBooking[]=[];
  Book: CabBooking[]=[];
  IdforEdit: number=0;

  constructor(private CustomerService: BookingService ) {
   }

  ngOnInit(): void {
    this.myForm = new FormGroup({
      customer_name: new FormControl(''),
      phone_number: new FormControl(''),
      email_address: new FormControl(''),
      taxi: new FormControl(''),
      extras: new FormControl(''),
      pickup_time: new FormControl(''),
      pickup_place: new FormControl(''),
      dropoff_place: new FormControl(''),
      comments: new FormControl('')
    });

    console.log("ng on init is called emp comp");
    this.CustomerService.getBookingList().subscribe((data:CabBooking[])=>{
      console.log(data);
      this.BookList = data;
    });
    console.log("Computed End");
  }

  onSubmit(myForm: FormGroup) {
    this.cus.customer_name = myForm.value.customer_name;
    this.cus.phone_number = myForm.value.phone_number;
    this.cus.email_address = myForm.value.email_address;
    this.cus.taxi = myForm.value.taxi;
    this.cus.pickup_time = myForm.value.pickup_time;
    this.cus.pickup_place = myForm.value.pickup_place;
    this.cus.dropoff_place = myForm.value.dropoff_place;
    this.cus.comments = myForm.value.comments;
    console.log(myForm.value);
    this.CustomerService.registerNewBookings(this.cus);

    this.myForm.reset();
}

showCustomerForEdit(id: number)
{
  this.IdforEdit= id;
  this.CustomerService.getBooking(this.IdforEdit).subscribe((data: CabBooking[])=>{
    this.Book=data;
  });
  this.myForm.setValue(

    {
       customer_name :  this.Book[this.IdforEdit].customer_name,
       phone_number : this.Book[this.IdforEdit].phone_number,
       email_address : this.Book[this.IdforEdit].email_address,
       taxi : this.Book[this.IdforEdit].taxi,
       pickup_time : this.Book[this.IdforEdit].pickup_time,
       pickup_place : this.Book[this.IdforEdit].pickup_place,
       dropoff_place : this.Book[this.IdforEdit].dropoff_place,
       extras :this.Book[this.IdforEdit].extras,
       comments : this.Book[this.IdforEdit].comments,
   });
}

onExtraChange(event: any){
  this.cus.extras=this.cus.extras + " "+event.target.value
}

}