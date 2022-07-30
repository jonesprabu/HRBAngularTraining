import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { TaxiBooking } from '../taxi-booking';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {
  cusform!:FormGroup;
  taxi:TaxiBooking=new TaxiBooking;
  cusList:TaxiBooking[]=[];
  constructor(private NewCus:BookingService,private router:Router){}

  ngOnInit(): void {

    this.cusform=new FormGroup({



      name:new FormControl('',Validators.required),

      phone:new FormControl(null, [Validators.required, Validators.pattern('^[6-9]\d{9}$')]),

      email:new FormControl(null,[Validators.required,Validators.email]),

      instructions :new FormControl(null,[Validators.required, Validators.minLength(10)]),

      ch:new FormControl(null,Validators.required),

      choose:new FormControl(null,Validators.required),

      date:new FormControl(null,Validators.required),

      pickup:new FormControl (null,Validators.required),

      drop:new FormControl (null,Validators.required)
    })
  } 
    onSubmit(form: FormGroup)

  {
    this.taxi.name=form.value.name;

    this.taxi.phone=form.value.phone;

    this.taxi.email=form.value.email;

    this.taxi.ch=form.value.ch;

    this.taxi.choose=form.value.choose;

    this.taxi.pickup=form.value.pickup;

    this.taxi.drop=form.value.drop;

    this.taxi.instructions=form.value.instructions;




    this.NewCus.registerNewBookings(this.taxi);  
    this.NewCus.getCusDetails().subscribe((data:TaxiBooking[])=>{
      this.cusList=data;
    })



  }
  }


