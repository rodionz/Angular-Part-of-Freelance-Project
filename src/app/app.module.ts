import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KupotholimComponent } from './kupotholim/kupotholim.component';
import { EmployeesComponent } from './employees/employees.component';
import { HeaderComponent } from './header.component';
import { DataserviceService } from './dataservice.service';

@NgModule({
  declarations: [
    AppComponent,
    KupotholimComponent,
    EmployeesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
    
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
