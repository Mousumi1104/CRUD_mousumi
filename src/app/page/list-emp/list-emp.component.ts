import { Component,OnInit } from '@angular/core';
import {CrudHttpService} from '../../crud-http.service'


@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {
  Users:any=[];
data:any
p:number=1;
//i:number=0
  constructor(private cd:CrudHttpService){

  }
ngOnInit(): void {
  //throw new Error('Method not implemented.');
  this.data=localStorage.getItem('User');
  this.Users=JSON.parse(this.data)
  this.cd.list().subscribe((response)=>{
    this.Users = response;
    },(error=>{
    })); 
    }
 /// alert(this.Users)
}



