import { DataserviceService } from '../dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
private subscription : Subscription;


  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
  }

onFetch(){
    this.dataservice.fetchFamilyStatus()
    
    
  }



}
