import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'app/booking.service';
import { FormClass } from 'app/form-class';

@Component({
  selector: 'app-booking-edit',
  templateUrl: './booking-edit.component.html',
  styleUrls: ['./booking-edit.component.scss']
})
export class BookingEditComponent implements OnInit {

  BookList: FormClass[] = [];
  cus: FormClass = new FormClass();

  booking: FormClass ={
    customer_name: '',
    id: 0,
    phone_number: '',
    email_address: '',
    taxi: '',
    extras: '',
    pickup_time: '',
    pickup_place: '',
    dropoff_place: '',
    comments: ''
  };
  

  constructor(private route: ActivatedRoute, private bookingService: BookingService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    this.bookingService.getBooking(id).subscribe((data: BookingService)=>{
      console.log("display employee list..."+data);
      this.bookingService = data;
      console.log(this.bookingService);
    });
  }

  //to update a new employee from the db.json
  updateEmployeeDetails(): void {
    console.log(this.booking);
    this.bookingService.updateBooking(this.booking).subscribe((data)=>{
      console.log("Employee Updated Successfully...");
    });
  }

  onExtrasChange(event: any) {
    this.cus.extras = this.cus.extras + " " + event.target.value
  }

}
