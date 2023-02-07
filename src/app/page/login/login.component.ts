import { Component,OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators} from '@angular/forms'
import {Route, Router} from '@angular/router'
import {CrudHttpService} from '../../crud-http.service'
import {AuthGuard} from '../../guards/auth.guard'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private fo:FormBuilder,private router:Router,private cd:CrudHttpService){

  }
ngOnInit(): void {
 /* if(this.cd.isLoggedIn()){
    this.router.navigate(['/employee'])
  }*/
  //throw new Error('Method not implemented.');
 this.ngForm=this.fo.group({
  t1:new FormControl('',[Validators.required,Validators.maxLength(50) ]),
  t2:new FormControl('',[Validators.required,Validators.maxLength(50) ]),
 })
}
ngForm:any;
token:string='abcde'

get t1(){
  return this.ngForm.get('first')
  }
  get t2(){
    return this.ngForm.get('last')
    }
Login(){
if(this.ngForm.value.t1=='admin' && this.ngForm.value.t2=='admin'){
  alert("Login Succesful")
  this.router.navigate(['/list'])
  localStorage.setItem('token',this.token)
}
}
submit(){
  this.Login();
  this.ngForm.reset();
}
}
