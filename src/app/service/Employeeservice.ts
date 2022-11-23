import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { employeeBean } from '../employeeBean/employeeBean';

@Injectable({
  providedIn: 'root'
})
export class Employeeservice {
baseurl:string="http://localhost:6010/employees/";
  constructor(private http:HttpClient) { }
  getEmployee():Observable<any>{
   return this.http.get<any>(this.baseurl);
  }
  createEmployee(employeeObj: employeeBean): Observable<any> {
    let employeeJsonString = JSON.stringify(employeeObj);
    console.log(employeeJsonString);
    return this.http.post<any>(this.baseurl, employeeJsonString);
  }
}