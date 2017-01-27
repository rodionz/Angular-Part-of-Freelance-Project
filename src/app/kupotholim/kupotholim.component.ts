import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-kupotholim',
  templateUrl: './kupotholim.component.html',
  styleUrls: ['./kupotholim.component.css']
})
export class KupotholimComponent implements OnInit {

  constructor(private dataservice: DataserviceService) { }

  ngOnInit() {
  }


  onFetch(){
    this.dataservice.fetchKupot();
  }
}
