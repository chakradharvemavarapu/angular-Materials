import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CreateemployeesComponent } from './empoyees/createemployees/createemployees.component';
import { ViewemployeesComponent } from './empoyees/viewemployees/viewemployees.component';
import { AngularmaterialModule } from './angularmaterial/angularmaterial.module'; 
import { FormsModule } from '@angular/forms';
import { Employeeservice } from './service/Employeeservice';

@NgModule({
  declarations: [
    AppComponent,
    CreateemployeesComponent,
    ViewemployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularmaterialModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [Employeeservice],
  bootstrap: [AppComponent]
})
export class AppModule { }
