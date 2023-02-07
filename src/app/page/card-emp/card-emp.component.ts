import { Component, OnInit } from '@angular/core';
import { CrudHttpService } from '../../crud-http.service'
import { FormControl, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
@Component({
  selector: 'app-card-emp',
  templateUrl: './card-emp.component.html',
  styleUrls: ['./card-emp.component.css']
})
export class CardEmpComponent implements OnInit {
  Users: any = [];
  User:any[]=[]
  emp:any[]=[]
  empl={
   
    name:'',
    position:'',
    about:'',
    jo_date:''
    }
  data: any;
  i: any
  Id:any;
  name: any = ""; //Proterty
  position: any = ""; //Proterty
  about: any = ""; //Proterty
  jo_date: any = ""; //Proterty
  isShowEditDiv = false;
  ngForm: any;
  p:number=1;
  token=localStorage.getItem('token')
  date=new Date()
  index:any
  constructor(private cd: CrudHttpService, private fo: FormBuilder,private router:Router) { }
  ngOnInit(): void {

    //throw new Error('Method not implemented.');
    this.data = localStorage.getItem('User');
    this.Users = JSON.parse(this.data)
    this.User=JSON.parse(this.data)
    this.cd.list().subscribe((response) => {
      this.Users = response;
    }, (error => {
    }));
    this.ngForm = this.fo.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      position: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      about: new FormControl('', [Validators.required, Validators.maxLength(1000)]),
      jo_date: new FormControl('', [Validators.required,]),
    })
  }
  
  ShowAllUsers(){
    this.cd.list().subscribe((response)=>{
    this.Users = response;
    },(error=>{
    })); 
    }
    

  // alert(this.Users)
  Edit(data: any) {
  
    let user_data = { name: data.name, position: data.position, about: data.about, jo_date: data.jo_date }
    
    this.cd.update(this.Id, user_data).subscribe((response:any) => {
       this.ShowAllUsers();
    }, (error => {
    }));
    this.isShowEditDiv = !this.isShowEditDiv;
  }
  sendtoUpdate(user_data: any,id:any) {
  this.index=id;
  console.log(id)
    //Two-way-Data Binding
    if(this.token!=null){
     this.Id=user_data.id
    this.name = user_data.name
    this.position = user_data.position
    this.about = user_data.about
    this.jo_date = user_data.jo_date
    
    this.ShowEditDiv();}
    else{
      this.router.navigate(['/login'])
    }
  }
  updated(id:any){
    this.Edit(this.ngForm.value)
    console.log(id)
    /*let value=JSON.stringify(this.ngForm.value)
   let result= this.Users.splice(id,1,value)
   console.log(id)
   localStorage.setItem('User',JSON.stringify(result))
   this.data=(localStorage.getItem('User'))
   this.Users=this.data*/
   let item=localStorage.getItem('User')
   if(item!=null){
    this.emp=JSON.parse(item)}
   // this.empl.empId=this.emp.length+1
    this.emp.splice(this.index,1,this.empl);
    //this.emp.push(this.empl)
    this.data=this.ngForm.value
    localStorage.setItem('User',JSON.stringify(this.emp));
    this.empl={
      
      name:'',
      position:'',
      about:'',
      jo_date:''
      }
      this.Users=this.emp
  

  }
  ShowEditDiv() {
    this.isShowEditDiv = !this.isShowEditDiv;
  }

  delete(id: any,ids:any) {
    console.log(ids)
   // let result = this.Users.splice(ids,1);
   // localStorage.setItem('User', JSON.stringify(result))
   // for(let i = 0; i <this.Users.length; i++) {
      //let res=this.Users[i].empId
      //console.log(res)
     // if(i == ids) {
      let item=localStorage.getItem('User')
      if(item!=null){
       this.emp=JSON.parse(item)}
      // this.empl.empId=this.emp.length+1
       this.emp.splice(ids,1);
       //this.emp.push(this.empl)
      // this.data=this.ngForm.value
       localStorage.setItem('User',JSON.stringify(this.emp));
      /*this.empl={
         
         name:'',
         position:'',
         about:'',
         jo_date:''
         }*/
         this.Users=this.emp
      // localStorage.removeItem('User')
      
    
   
      this.cd.delete(id).subscribe((response)=>{
     this.ShowAllUsers();
    //alert("Employee data has been deleted");
   // location.reload()
      },(error=>{
      }));
      
      
  }

}