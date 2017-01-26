import { KupatHolim } from './Models/kupot-holim';
import { Injectable } from '@angular/core';
import { KupotholimComponent } from './kupotholim/kupotholim.component';
import { Employees } from './Models/employees';

@Injectable()
export class DataserviceService {
private kupot : KupatHolim [] = [];
private employees : Employees[] = [];
  constructor() { }

}
