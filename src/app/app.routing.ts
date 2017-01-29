import { futimes } from 'fs';

import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { KupotholimComponent } from './kupotholim/kupotholim.component';

const APP_ROUTES: Routes = [
    {path:'', redirectTo: '/', pathMatch: 'full'},
    {path: 'employeStatus', component: EmployeesComponent},
    {path: 'kupot',component : KupotholimComponent}
];

export const Routing = RouterModule.forRoot(APP_ROUTES);