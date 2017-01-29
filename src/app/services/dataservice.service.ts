import { Http, Response , Headers} from '@angular/http';

import { EventEmitter, Injectable } from '@angular/core';


import 'rxjs/Rx';
import { KupatHolim } from '../AngularModels/kupot-holim';
import { Employees } from '../AngularModels/employees';

@Injectable()
export class DataserviceService {
private kupot : KupatHolim [] = [];
private employees : Employees[] = [];


  constructor(private http : Http) { }
 kupotChaged = new EventEmitter<KupatHolim[]>();
 employeeStatusChanged = new EventEmitter<Employees[]>();



    storeKupot() {
    const body = JSON.stringify(this.kupot);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('', body, {headers: headers});
  }

   storeEmployeeStatus() {
    const body = JSON.stringify(this.employees);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('', body, {headers: headers});
  }


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
