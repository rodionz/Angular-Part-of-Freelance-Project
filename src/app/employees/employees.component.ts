import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";
import { Employees } from '../AngularModels/employees';



@Component({
    moduleId: module.id,
    selector: 'app-employees',
    templateUrl: './employees.component.html'
   
})
export class EmployeesComponent implements OnInit {
    private subscription: Subscription;
    emmployees : Employees[] = [];

    constructor(
        private dataservice: DataserviceService,
        private router: Router
    ) {
      this.emmployees = this.dataservice.storeFamilytatus()
     }

    ngOnInit() {
      this.dataservice.storeFamilytatus()
    }
    onStore() {
        this.dataservice.storeFamilytatus().subscribe(
            data => console.log(data),
            error => console.error(error)
        );
    }

    onFetch() {
        this.dataservice.GetFamilyStatus().subscribe(
            data => console.log(data),
            error => console.error(error)

        )


    }



}