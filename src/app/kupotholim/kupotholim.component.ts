import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Response } from "@angular/http";

import { DataserviceService } from '../services/dataservice.service';
import { KupatHolim } from '../AngularModels/kupot-holim';
import { DropdownValue, DropdownComponent } from '../Shared/drop-down-list.component';



@Component({
    moduleId: module.id,
    selector: 'app-kupotholim',
    templateUrl: './kupotholim.component.html'
   
})
export class KupotholimComponent implements OnInit {
    kupotholim: KupatHolim[] = [];

    constructor(
        private dataservice: DataserviceService,
        private router: Router
    ) { }

    ngOnInit() {
        this.dataservice.GetKupotFromDataBase()
            .subscribe((data :Response) => {
                console.log(data)
            })
    }


    onFetch() {
       
        this.dataservice.GetKupotFromDataBase()
            .subscribe((data : Response) => {
                console.log(data)})

       
    }
}
