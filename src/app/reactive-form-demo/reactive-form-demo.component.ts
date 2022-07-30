import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Taxireg } from '../taxireg';
import { TaxiserviceService } from '../taxiservice.service';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})

export class ReactiveFormDemoComponent implements OnInit {

  myForm: FormGroup;
  cust:Taxireg=new Taxireg(); 

  constructor(private fb:FormBuilder, private taxiService:TaxiserviceService ,private router: Router){
    this.myForm=this.fb.group({
      Name:[' ',Validators.required],
      Email:[' ',Validators.required,Validators.email],
      Phone:[' ',Validators.required,Validators.pattern("[0-9 ]{10}]")],
      TaxiType:[' ',Validators.required],
      Extras:[' ',Validators.required],
      PickupDateTime:[' ',Validators.required],
      PickupPlace:[' ',Validators.required],
      DropoffPlace:[' ',Validators.required],
      PSpecialInstructionshone:[' ',Validators.required]

    });
  }

  custList: Taxireg[]=[];
  ngOnInit() {
    this.myForm = new FormGroup({
      Name: new FormControl(' '),
      Email: new FormControl(' '),
      Phone: new FormControl(' '),
      TaxiType:new FormControl(' '),
      Extras:new FormControl(' '),
      PickupDateTime:new FormControl(' '),
      PickupPlace:new FormControl(' '),
      DropoffPlace:new FormControl(' '),
      SpecialInstructions:new FormControl(' ')

  })
  console.log("ng on init is called");

      this.taxiService.getCustomerList().subscribe((data: Taxireg[]) => {
 
       console.log("Display customer list...."+data);
 
       this.custList=data;
    });
  }
  

  onSubmit() {
   
  }

  registerCustomer(form: FormGroup){
      console.log("Registered succesfully");
      console.log('Valid?', form.valid); 
      console.log('Name', form.value.Name);
      console.log('Email', form.value.Email);
      console.log('Phone', form.value.Phone);
      console.log('TaxiType', form.value.TaxiType);
      console.log('Extras', form.value.Extras);
      console.log('PickupDateTime', form.value.PickupDateTime);
      console.log('PickupPlace', form.value.PickupPlace);
      console.log('DropoffPlace', form.value.DropoffPlace);
      console.log('SpecialInstructions', form.value.SpecialInstructions);
  
      this.cust.Email=form.value.Email;
      this.cust.Name=form.value.Name;
      this.cust.Phone=form.value.Phone;
      this.cust.TaxiType=form.value.TaxiType;
      this.cust.PickupDateTime=form.value.PickupDateTime;
      this.cust.PickupPlace=form.value.PickupPlace;
      this.cust.DropoffPlace=form.value.DropoffPlace;
      this.cust.SpecialInstructions=form.value.SpecialInstructions;
      // this.stud.gender=form.value.message;
  
      this.taxiService.saveCustomer(this.cust);
      // this.router.navigate(['../customerDashboard']);
      // this.router.navigate(['../']);
      // console.log("navigation....");

  }

}
   
  
   
  
