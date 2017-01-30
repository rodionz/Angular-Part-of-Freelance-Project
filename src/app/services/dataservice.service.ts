import { Http, Response, Headers } from '@angular/http';

import { EventEmitter, Injectable } from '@angular/core';


import 'rxjs/Rx';
import { KupatHolim } from '../AngularModels/kupot-holim';
import { Employees } from '../AngularModels/employees';

@Injectable()
export class DataserviceService {
    private kupot: KupatHolim[] = [];
    private employees: Employees[] = [];
    private headers: Headers;

    constructor(private http: Http) {

    }
    kupotChaged = new EventEmitter<KupatHolim[]>();
    employeeStatusChanged = new EventEmitter<Employees[]>();
    
    



    //storeKupot() {
    //    const body = JSON.stringify(this.kupot);
    //    const headers = new Headers({
    //        'Content-Type': 'application/json',
    //       headers.append('Access-Control-Allow-Origin', '*')
    //    });
    //    return this.http.post('/HomeController', body, { headers: headers });
    //}

    storeFamilytatus() {
        const body = JSON.stringify(this.employees);
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');
        return this.http.post('', body, { headers: this.headers });
    }


    GetKupot() {
        return this.http.get('http://localhost:64159/Home/GetKupot')
            .map((response: Response) => response.json())
            .subscribe(
            (data: KupatHolim[]) => {
               this.kupot = data;
                this.kupotChaged.emit(this.kupot);
            }
          );
    }

    GetFamilyStatus() {
        return this.http.get('http://localhost:64159/Home/GetEmployees')
            .map((response: Response) => response.json())
            .subscribe(
              ( data : Employees[]) => {
                this.employees = data;
                this.employeeStatusChanged.emit(this.employees);
              }             
            );                  
    };

}
