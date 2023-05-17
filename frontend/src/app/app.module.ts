import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmployeecrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,//The HttpClientModule is a service module provided by Angular that allows us to perform HTTP requests and easily manipulate those requests and their responses
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
