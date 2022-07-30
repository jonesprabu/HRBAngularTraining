import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {


  exform!:FormGroup;


  ngOnInit(): void {

    this.exform=new FormGroup({

      'name':new FormControl(null),
      'phone':new FormControl('', [Validators.required, Validators.pattern('^[6-9]\d{9}$')]),
      'email':new FormControl(Validators.email,Validators.required)
      ''


    })
  }

}
