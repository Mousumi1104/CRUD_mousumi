import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudHttpService } from '../../crud-http.service'
//import {FilterPipe} from './filter.pipe'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  Users: any = [];
  filterUser: any = []
  data: any
  p: number = 1;
  name: any;
  searchs: string = ''
  input: any;
  filter: any;
  table: any
  tr: any
  td: any
  i: any
  txtValue: any;
  //p:number=1;
  token = localStorage.getItem('token')
  passwordRegex = /[^a-zA-Z0-9-]/;
   
    searchbar:any

  constructor(private cd: CrudHttpService, private router: Router,private fo:FormBuilder) {

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.data = localStorage.getItem('User');
    this.Users = JSON.parse(this.data)
    this.cd.list().subscribe((response) => {
      this.Users = response;
      console.log(this.Users)
    }, (error => {
    }));
    this.searchbar=this.fo.group({
      search:new FormControl([''])
  })

  }
  get search(){
    return this.searchbar.get('search')
    }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/header'])
  }
  get filterText() {
    return this.searchs;
  }

  set filterText(value: string) {
    this.searchs = value;
    this.filterUser = this.filterRoomLoc(value);
  }
  filterRoomLoc(filterTerm: string) {
    if (this.Users.length === 0 || this.filterText === '') {
      return this.Users;
    } else {
      return this.Users.filter((res: any) => {
        return res.name.toLowerCase() === filterTerm.toLowerCase();
      })
    }
  }
  myFunc() {


    this.router.navigate(['/list'])
    this.input = document.getElementById("myInput");
    if(this.input.value=='!'|| this.input.value=='@' || this.input.value=='#'|| this.input.value=='$' || this.input.value=='%'|| this.input.value=='^ '|| this.input.value=='&'|| this.input.value=='*'|| this.input.value=='<'|| this.input.value=='>'){
      this.router.navigate(['/not-found'])
    }
    this.filter = this.input.value.toUpperCase();
    this.table = document.getElementById("myTable");
    this.tr = this.table.getElementsByTagName("tr");
   

    // Loop through all table rows, and hide those who don't match the search query
    for (this.i = 0; this.i < this.tr.length; this.i++) {
      this.td = this.tr[this.i].getElementsByTagName("td")[1];
      if (this.td) {
        this.txtValue = this.td.textContent || this.td.innerText;
        if (this.txtValue.toUpperCase().indexOf(this.filter) > -1) {
          this.tr[this.i].style.display = "";
         // this.p++
        } else {
          this.tr[this.i].style.display = "none";
        }
      }
    }
  }
}
