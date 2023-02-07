import { Component } from '@angular/core';
import { navItems } from './nav';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public navItems = navItems;
  constructor(private router:Router){

  }
  myFunc(){
  this.router.navigate(['/list'])
  }
}
