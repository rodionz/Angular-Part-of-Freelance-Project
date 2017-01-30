import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KupotholimComponent } from './kupotholim/kupotholim.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './header.component';
import { DataserviceService } from './services/dataservice.service';
import { Routing } from './app.routing';
import { DropDownListComponent } from './Shared/drop-down-list.component';


@NgModule({
  declarations: [
    AppComponent,
    KupotholimComponent,
    EmployeesComponent,
    HeaderComponent,
    DropDownListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    Routing
    
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
