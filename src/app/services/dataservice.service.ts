import { Http, Response , Headers} from '@angular/http';

import { EventEmitter, Injectable } from '@angular/core';


import 'rxjs/Rx';
import { KupatHolim } from '../AngularModels/kupot-holim';

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
