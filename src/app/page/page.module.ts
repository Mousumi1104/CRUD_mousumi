import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { PageRoutingModule } from './page-routing.module';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import {NavbarModule,DropdownModule,OffcanvasModule,NavModule,GridModule,CollapseModule,CalloutModule,ButtonModule,FormModule,SidebarModule,CardModule} from '@coreui/angular'
import {IconModule} from '@coreui/icons-angular';
import { NewEmpComponent } from './new-emp/new-emp.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { CardEmpComponent } from './card-emp/card-emp.component';
import { EditComponent } from './edit/edit.component';
import {NgxPaginationModule}from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
//import {NgPipesModule} from 'angular-pipes'
import {FilterPipe} from '../filter.pipe';
import { NotFoundComponent } from './not-found/not-found.component'
//import { AppModule } from "../app.module";

@NgModule({
    declarations: [
        LoginComponent,
        EmployeeComponent,
        NewEmpComponent,
        ListEmpComponent,
        CardEmpComponent,
        EditComponent,
        FilterPipe,
        NotFoundComponent
    ],
    imports: [
        CommonModule,
        PageRoutingModule,
        ReactiveFormsModule,
        NavModule,
        NavbarModule,
        DropdownModule,
        OffcanvasModule,
        GridModule,
        CardModule, CollapseModule, CalloutModule, ButtonModule, FormModule, SidebarModule, IconModule, Ng2SearchPipeModule,
        NgxPaginationModule,
       
    ]
})
export class PageModule { }
