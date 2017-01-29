import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
private subscription : Subscription;


  constructor(
    private dataservice: DataserviceService,
    private router : Router
    ) { }

  ngOnInit() {
  }

onFetch(){
    this.dataservice.fetchFamilyStatus();  
  }

onStore(){
  this.dataservice.storeFamilytatus().subscribe(
    data => console.log(data),
    error => console.error(error)
  );
}

dblClick(){
 console.log("Double Click")
}

}
