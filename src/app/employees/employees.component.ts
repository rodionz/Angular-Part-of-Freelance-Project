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
    ) {}

      ngOnInit() {
   this.emmployees = this.dataservice.getEmployees();
   this.dataservice.employeeStatusChanged.subscribe(
     (emmployees: Employees[]) => this.emmployees = emmployees
   );
  }


    // onStore() {
    //     this.dataservice.storeFamilytatus().subscribe(
    //         data => console.log(data),
    //         error => console.error(error)
    //     );
    // }

    onFetch() {
     console.log(this.emmployees)

    }


    }



}