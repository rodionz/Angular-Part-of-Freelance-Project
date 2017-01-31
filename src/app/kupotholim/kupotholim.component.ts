import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Subscription } from 'rxjs/Rx';
import { KupatHolim } from '../AngularModels/kupot-holim';
// import { DropdownValue, DropdownComponent } from '../Shared/drop-down-list.component';

@Component({
  selector: 'app-kupotholim',
  templateUrl: './kupotholim.component.html'
  
})
export class KupotholimComponent implements OnInit {
 private subscription: Subscription;
    kupotholim : KupatHolim [] = [];
   

  constructor(
    private dataservice: DataserviceService,
    private router : Router
    ) { }

  ngOnInit() {
      this.kupotholim = this.dataservice.getKupot();
      this.dataservice.kupotChaged.subscribe(
     (kupot : KupatHolim []) => this.kupotholim = kupot
   );
   
  }


  onFetch(){
 
    console.log(this.kupotholim);
  }
}
