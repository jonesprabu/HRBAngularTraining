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
      this.booking = data;
      console.log(this.booking);
    });
  }

}
