import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormClass } from 'app/form-class';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  myForm!: FormGroup;
  cus: FormClass = new FormClass();

  BookList: FormClass[] = [];

  constructor(private CustomerService: BookingService) {
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

    console.log("ng on init is called reactive form component");
    this.CustomerService.getBookingList().subscribe((data: FormClass[]) => {
      console.log(data);
      this.BookList = data;
    });
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
  }

  showCustomerForEdit(id: number) {
  }

  onExtrasChange(event: any) {
    this.cus.extras = this.cus.extras + " " + event.target.value
  }

}