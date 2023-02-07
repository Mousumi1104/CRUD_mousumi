import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NavbarModule,DropdownModule,OffcanvasModule,NavModule,GridModule,CollapseModule,CalloutModule,ButtonModule,FormModule,SidebarModule,FooterModule} from '@coreui/angular'
import {IconModule} from '@coreui/icons-angular'
import {PageModule} from './page/page.module';
import { FooterComponent } from './footer/footer.component';
//import { FilterPipe } from './filter.pipe'
//import { GridModule } from '@coreui/angular/public-api';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    //FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NavbarModule,
    FooterModule,
    DropdownModule,
    SidebarModule,
    OffcanvasModule,
    NavModule,
    CollapseModule,
    CalloutModule,
    IconModule,
    GridModule,
    ButtonModule,
    FormModule,
    PageModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
