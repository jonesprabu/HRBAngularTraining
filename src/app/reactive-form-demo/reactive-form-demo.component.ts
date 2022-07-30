import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Bookings } from '../bookings';
import { NewBookingsService } from '../new-bookings.service';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  myForm:FormGroup;
  constructor(private NewBooking:NewBookingsService,private fb: FormBuilder,private route: ActivatedRoute) 
  {
    this.myForm = fb.group(
      {
      phone: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
      })
  }

  Booking:Bookings=new Bookings;
 
  result:Bookings[]=[];

  editBooking:Bookings={
    id:0,
    name:'',
    phone:0,
    email:'',
    taxi:'',
    extra:'',
    dateTime:'',
    pikupPlace:'',
    dropoffPlace:'',
    instructions:''
  };
  
  ngOnInit():void { 

    //initialising form
    this.myForm = new FormGroup
    ({
    name: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    taxi: new FormControl(''),
    extra: new FormControl(''),
    dateTime: new FormControl(''),
    pikupPlace: new FormControl(''),
    dropoffPlace: new FormControl(''),
    instructions: new FormControl(''),
     });  

     const id = this.route.snapshot.paramMap.get('id');
     console.log(id);
 
  

  }

  onSubmit(form:FormGroup){
    this.Booking.name=form.value.name;
    this.Booking.phone=form.value.phone;
    this.Booking.email=form.value.email;
    this.Booking.taxi=form.value.taxi;
    if(this.myForm.value.extra== true)
    {
      this.Booking.extra=form.value;
    }
    this.Booking.dateTime=form.value.dateTime;
    this.Booking.pikupPlace=form.value.pikupPlace;
    this.Booking.dropoffPlace=form.value.dropoffPlace;
    this.Booking.instructions=form.value.instructions;
    
    this.NewBooking.RegisterNewBooking(this.Booking);

    this.NewBooking.getBookingList().subscribe((data:Bookings[])=>{
    console.log("values returned..");
    console.log(data);
    this.result=data;});
  }

  Edit(id: number):void
  {
    this.editBooking.id=id;
    console.log(id); 
    
    this.NewBooking.getBooking(id).subscribe((data: Bookings)=>
    {
      this.editBooking = data;
      console.log(this.editBooking);
    });

    this.NewBooking.updateBooking(this.editBooking).subscribe((data)=>{
      console.log("In edit method")});
  }
}
