import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header.component';
import { AppComponent }  from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { KupotholimComponent } from './kupotholim/kupotholim.component';
import { Routing } from './app.routing';
import { DataserviceService } from './services/dataservice.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'angular2-select';
//import { DropdownValue, DropdownComponent } from './Shared/drop-down-list.component';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        Routing,
        FormsModule,
        ReactiveFormsModule,
        SelectModule
   

    ],
  declarations:
  [
      AppComponent,
      HeaderComponent,
      EmployeesComponent,
      KupotholimComponent,
      //DropdownValue,
      //DropdownComponent
    
    ],
  providers: [DataserviceService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
