import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookTaxi } from '../book-taxi';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {
  regform!:FormGroup;
  Taxi:BookTaxi=new BookTaxi;
  cusList:BookTaxi[]=[];
  constructor(private NewReg:BookingService,private router:Router){}

  ngOnInit(): void {
    this.regform=new FormGroup({
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
    this.Taxi.name=form.value.name;
    this.Taxi.phone=form.value.phone;
    this.Taxi.email=form.value.email;
    this.Taxi.ch=form.value.ch;
    this.Taxi.choose=form.value.choose;
    this.Taxi.pickup=form.value.pickup;
    this.Taxi.drop=form.value.drop;
    this.Taxi.instructions=form.value.instructions;
    this.NewReg.registerNewBookings(this.Taxi);  

    this.NewReg.getRegDetails().subscribe((data:BookTaxi[])=>{
      this.cusList=data;
    })

  }
  }
