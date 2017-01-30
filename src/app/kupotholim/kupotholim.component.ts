import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../services/dataservice.service';
import { Subscription } from 'rxjs/Rx';
import { KupatHolim } from '../AngularModels/kupot-holim';

@Component({
  selector: 'app-kupotholim',
  templateUrl: './kupotholim.component.html',
  styleUrls: ['./kupotholim.component.css']
})
export class KupotholimComponent implements OnInit {
 private subscription: Subscription;
    emmployees : KupatHolim [] = [];


  constructor(
    private dataservice: DataserviceService,
    private router : Router
    ) { }

  ngOnInit() {
    this.dataservice.GetKupot();
  }


  onFetch(){
    this.dataservice.fetchKupot();
  }
}
