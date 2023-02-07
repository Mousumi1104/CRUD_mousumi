import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import{Router}from '@angular/router';
import{CrudHttpService} from '../crud-http.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route:Router,private cd:CrudHttpService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(!this.cd.isLoggedIn()){
      this.route.navigate(['/employee']);
      return false
    }
    return this.cd.isLoggedIn()
  }
  
}
