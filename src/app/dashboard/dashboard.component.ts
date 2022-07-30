import { Component, OnInit } from '@angular/core';
import { Taxireg } from '../taxireg';
import { TaxiserviceService } from '../taxiservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private taxiService:TaxiserviceService) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
