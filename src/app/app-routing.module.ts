import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from '@coreui/angular';
import { AppComponent } from './app.component';
import { AuthGuard } from './guards/auth.guard';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'',redirectTo:'header',pathMatch:'full'},
  {path:'header', component:HeaderComponent},
  {path:'foot',component:FooterComponent},
 {path:'page',loadChildren:()=>import('./page/page.module').then((m)=>m.PageModule)},
 // {path:'page',canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
