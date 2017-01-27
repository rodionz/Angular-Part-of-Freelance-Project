import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-kupotholim',
  templateUrl: './kupotholim.component.html',
  styleUrls: ['./kupotholim.component.css']
})
export class KupotholimComponent implements OnInit {

  constructor(
    private dataservice: DataserviceService,
    private router : Router
    ) { }

  ngOnInit() {
  }


  onFetch(){
    this.dataservice.fetchKupot();
  }
}
