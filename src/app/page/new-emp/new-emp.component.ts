import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {CrudHttpService} from '../../crud-http.service'
@Component({
  selector: 'app-new-emp',
  templateUrl: './new-emp.component.html',
  styleUrls: ['./new-emp.component.css']
})
export class NewEmpComponent implements OnInit {
  data:any[]=[]
emp:any[]=[];
oldemp:any[]=[];
empl:any={
 
name:'',
position:'',
about:'',
jo_date:''
}
date=new Date()
  create: any
  constructor(private router: Router, private fo: FormBuilder,private cd:CrudHttpService) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.create = this.fo.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      position: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      about: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      jo_date: new FormControl('', [Validators.required, ]),
    })
   // this.oldemp=JSON.parse(localStorage.getItem('User'))
  }

  get name() {
    return this.create.get('name')
  }
  get position() {
    return this.create.get('position')
  }
  get about() {
    return this.create.get('about')
  }
  get jo_date() {
    return this.create.get('jo_date')
  }
  submit(){
this.getuser(this.create.value)
this.create.reset()
  }
  getuser(data:any) {
   // debugger
  
   let item=localStorage.getItem('User')
   if(item!=null){
    this.emp=JSON.parse(item)}
    this.empl.empId=this.emp.length+1
    this.emp.push(this.empl);
    this.data=this.create.value
    localStorage.setItem('User',JSON.stringify(this.emp));
    this.empl={
      
      name:'',
      position:'',
      about:'',
      jo_date:''
      }
    //let user_data = { fnam: data.first, lnam: data.last, email: data.email, pas: data.password, mob: data.ph, orgNm: data.orgn, orgAd: data.orga, orgDt: data.orgd }
    //Json Array will be created as the No. of fields & name of the fields assigns as above
    // this.crudHttpService.create(user_data).subscribe((response:any)=>
    {
      //console.log(response)
    } ((error: any) => { });
    let user_data = {name:data.name,position:data.position,about:data.about,jo_date:data.jo_date}
    //Json Array will be created as the No. of fields & name of the fields assigns as above
    this.cd.create(user_data).subscribe((response:any)=>
    {
      console.log(response)
    },(error=>{ })); 
  }

}
