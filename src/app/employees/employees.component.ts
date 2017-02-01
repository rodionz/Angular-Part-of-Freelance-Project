
import { Router } from '@angular/router';
import { DataserviceService } from '../services/dataservice.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Rx";

import { Response } from "@angular/http";
import { Employees } from '../AngularModels/employees';
import { DropdownValue, DropdownComponent } from '../Shared/drop-down-list.component';



@Component({
    moduleId: module.id,
    selector: 'app-employees',
    templateUrl: './employees.component.html'
   
})
export class EmployeesComponent implements OnInit {
    private subscription: Subscription;
    emmployees: Employees[];

    characters: Array<any>;


    constructor(
        private dataservice: DataserviceService,
        private router: Router
    ) { }

    ngOnInit() {

        //this.dataservice.employeeStatusChanged.subscribe(
        //    (emmployees: Employees[]) => this.emmployees = emmployees,
           
        //);
        this.dataservice.GetFamilyStatusFromDataBase()
            .subscribe((data: Response) => console.log(data))
    }
 

    onFetch() {
        ////this.dataservice.GetFamilyStatusFromDataBase()
        ////    .subscribe((data: Response) => console.log(data))
        console.log(this.emmployees);
    }



}



