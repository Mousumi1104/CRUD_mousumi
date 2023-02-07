import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardEmpComponent } from './card-emp/card-emp.component';
import { EditComponent } from './edit/edit.component';
import { EmployeeComponent } from './employee/employee.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { LoginComponent } from './login/login.component';
import { NewEmpComponent } from './new-emp/new-emp.component';
import {AuthGuard} from '../guards/auth.guard'
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'employee',component:EmployeeComponent},
  {path:'new',component:NewEmpComponent},
  {path:"list",component:ListEmpComponent},
  {
  path:"card",component:CardEmpComponent
  },
  {path:'edit',component:EditComponent},
 // {path:'**',component:ListEmpComponent},
 // {path:'edit',canActivate:[AuthGuard]}
 {path:'not-found',component:NotFoundComponent},
 {path:'**',component:ListEmpComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { 



}
