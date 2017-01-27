import { Http, Response , Headers} from '@angular/http';
import { KupatHolim } from './Models/kupot-holim';
import { EventEmitter, Injectable } from '@angular/core';

import { Employees } from './Models/employees';
import 'rxjs/Rx';

@Injectable()
export class DataserviceService {
private kupot : KupatHolim [] = [];
private employees : Employees[] = [];


  constructor(private http : Http) { }
 kupotChaged = new EventEmitter<KupatHolim[]>();
 employeeStatusChanged = new EventEmitter<Employees[]>();


    fetchKupot(){
    return this.http.get('')
      .map((response: Response) => response.json())
      .subscribe(
        (data: KupatHolim[]) => {
          this.kupot = data;
          this.kupotChaged.emit(this.kupot);
        }
      );
  }

     fetchFamilyStatus(){
    return this.http.get('')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Employees[]) => {
          this.employees = data;
          this.employeeStatusChanged.emit(this.employees);
        }
      );
  }

}
