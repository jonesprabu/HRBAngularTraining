import { Component,OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import { Class } from "../class";
import { ServiceService } from "../service.service";


@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {
  MyForm!: FormGroup;
  cus:Class=new Class();
  customerList:Class[]=[];

  constructor(private fb:FormBuilder, private service:ServiceService,private router:Router) {
    this.MyForm=this.fb.group({
      customer_name: ['',Validators.required],
      phone_number: ['',Validators.required,Validators.minLength(10)],
      email_address: ['',Validators.required,Validators.email],
      taxi: ['',Validators.required],
      extras: ['',Validators.required],
      pickup_time: ['',Validators.required],
      pickup_place: ['',Validators.required],
      dropoff_place: ['',Validators.required],
      comments: ['',Validators.required],
    });
   }

  ngOnInit(): void {
    /* console.log("ng on init is called customer comp"); */

    this.service.getMemberList().subscribe((data: Class[]) => {
      console.log("Display customer list...."+data);
      this.customerList=data;
    });
    console.log("Component end")
  }
  

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.customer_name);
    console.log('Phone', form.value.phone_number);
    console.log('Email', form.value.email_address);
    console.log('Taxi', form.value.taxi);
    console.log('Extras', form.value.extras);
    console.log('Pickup Date/Time', form.value.pickup_time);
    console.log('Pickup Place', form.value.pickup_place);
    console.log('Dropoff Place', form.value.dropoff_place);
    console.log('Special Instructions', form.value.comments);

    this.cus.customer_name=form.value.customer_name;
    this.cus.phone_number=form.value.phone_number;
    this.cus.email_address=form.value.email_address;
    this.cus.taxi=form.value.taxi;
    this.cus.extras=form.value.extras;
    this.cus.pickup_time=form.value.pickup_time;
    this.cus.pickup_place=form.value.pickup_place;
    this.cus.dropoff_place=form.value.dropoff_place;
    this.cus.comments=form.value.comments;



    this.service.saveMember(this.cus);
    console.log("Registered successfully...");
    this.router.navigate(['../Dashboard']);
    console.log("navigation!!!");
  }

}
