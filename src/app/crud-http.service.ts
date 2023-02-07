import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class CrudHttpService {
  
  httpHeaders = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json',
     // 'Authorization' : this.userAuth.getToken()
  })
  };
  apiUrl: string = 'http://localhost:3000/user_data';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http:HttpClient,private router:Router) {}
  create(data: any): Observable<any> {
  let API_URL = `${this.apiUrl}`
  return this.http.post<any>(this.apiUrl, data,{ headers: this.headers })
  .pipe(
  catchError(this.handleError)
  ) 
  }
  list() {
  return this.http.get(`${this.apiUrl}`);
  }
  update(id: any, data: any): Observable<any> {
  let API_URL = `${this.apiUrl}/${id}`;
  return this.http.put(API_URL, data, { headers: this.headers }).pipe(
  catchError(this.handleError)
  )
  }
  delete(id: any): Observable<any> {
  var API_URL = `${this.apiUrl}/${id}`;
  return this.http.delete(API_URL).pipe(
  catchError(this.handleError)
  )
  }
  handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
  console.error('An error occurred:', error.error.message);
  } else {
  console.error(
  `Backend returned code ${error.status}, ` +
  `body was: ${error.error}`);
  }
  return throwError(
  'Something bad happened; please try again later.');
  }
  setToken(token:string){
 localStorage.setItem('token',token)
  }
  getToken():string|null{
    return localStorage.getItem('token')
  }
  isLoggedIn(){
    return this.getToken()==null
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/header'])
  }
  login(user:any,pass:any):Observable<any>{
  if(user=='admin' && pass=='admin'){
   // this.setToken('abcdefghijklmnopqrstuvwxyz');
    
  }

  return throwError(new Error('Failed to Login'))
  }
}
