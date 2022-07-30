import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookingCab } from '../booking-cab';
import { CabService } from '../cab.service';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {


  exform!:FormGroup;
  cab:BookingCab=new BookingCab;
  cusList:BookingCab[]=[];
  cid:number=0;
  cab1:BookingCab=new BookingCab;



  constructor(private NewCus:CabService,private router:Router){}


  ngOnInit(): void{

    this.exform=new FormGroup({

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
  


    

    
    this.cab.name=form.value.name;
    this.cab.phone=form.value.phone;
    this.cab.email=form.value.email;
    this.cab.ch=form.value.ch;
    this.cab.choose=form.value.choose;
    this.cab.date=form.value.date;
    this.cab.pickup=form.value.pickup;
    this.cab.drop=form.value.drop;
    this.cab.instructions=form.value.instructions;


    this.NewCus.registerNewCab(this.cab);   
    this.NewCus.getCusDet().subscribe((data:BookingCab[])=>{
      this.cusList=data;
    })

  }

editDet(id:number){

  this.cid=id;
  this.NewCus.editCusDet(this.cid).subscribe((data:BookingCab)=>{
    this.cab1=data;
    console.log("entered")

  })


}
  
  
  }
