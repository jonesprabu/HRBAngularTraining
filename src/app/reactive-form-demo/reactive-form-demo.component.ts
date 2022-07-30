import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Class } from '../class';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {

  Form1: FormGroup;
  customer: Class = new Class();
  custList: Class[]=[];

  constructor(private fb: FormBuilder, private service: ServiceService,private router: Router) {
    this.Form1 = this.fb.group({
      customer_name: ['',Validators.required],
      phone_number: ['',[Validators.required, Validators.minLength(10)]],
      email_address: ['',[Validators.required, Validators.email]],
      taxi: ['',Validators.required],
      extras: ['',Validators.required],
      pickup_time: ['',Validators.required],
      pickup_place: ['',Validators.required],
      dropoff_place: ['',Validators.required],
      comments: ['',Validators.required],
    });
   }

  ngOnInit(): void {
    this.service.getCustList().subscribe((data: Class[]) => 
    {
      console.log("Display customer list...."+data);
      this.custList=data; 
    });
    console.log("Component end");
  }

  Registration(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.customer_name);
    console.log('Phone No', form.value.phone_number);
    console.log('Email', form.value.email_address);
    console.log('Taxi Type', form.value.taxi);
    console.log('Extras', form.value.extras);
    console.log('Pickup Date/Time', form.value.pickup_time);
    console.log('Pickup Place', form.value.pickup_place);
    console.log('Dropoff Place', form.value.dropoff_place);
    console.log('Special Instruction', form.value.comments);
 
    this.customer.customer_name=form.value.customer_name;
    this.customer.phone_number=form.value.phone_number;
    this.customer.email_address=form.value.email_address;
    this.customer.taxi=form.value.taxi;
    this.customer.extras=form.value.extras;
    this.customer.pickup_time=form.value.pickup_time;
    this.customer.pickup_place=form.value.pickup_place;
    this.customer.dropoff_place=form.value.dropoff_place;
    this.customer.comments=form.value.comments;

    this.service.saveCustomer(this.customer);
    console.log("Navigation");
    this.router.navigate(['../Dashboard']);
    console.log("navigation!!!");
  }

}
