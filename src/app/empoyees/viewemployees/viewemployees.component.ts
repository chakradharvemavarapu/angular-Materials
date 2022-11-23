import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Employeeservice } from 'src/app/service/Employeeservice';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import { CreateemployeesComponent } from '../createemployees/createemployees.component';

@Component({
  selector: 'app-viewemployees',
  templateUrl: './viewemployees.component.html',
  styleUrls: ['./viewemployees.component.css']
})
export class ViewemployeesComponent implements OnInit, AfterViewInit {

  ctitle = 'Angularmaterial';
  employees: any | undefined;
  search: any;
  displayedColumns: string[] = [
    'employeeId', 'firstName', 'lastName', 'email', 'phoneNumber', 'hireDate',
    'salary', 'JobName', 'commisionPct', 'managerName', 'DepartmentName','actions'];

  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  isCondition = false;
 

  constructor(private service: Employeeservice,public dialog: MatDialog ) {
  }
  openDialog() {
    this.dialog.open(CreateemployeesComponent, {
      width:'80%',
      height:'80%'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.employees.filter = filterValue.trim().toLowerCase();
  }
  editpoduct(row:any){
    this.dialog.open(CreateemployeesComponent,{
      width:'80%',
      height:'100%',
      data:row
    })
  }

  ngAfterViewInit(): void {
    // this.service.getEmployee().subscribe((data) => {
    //   if (data.status === 200) {
    //     console.log(data.result);
    //     this.employees = new MatTableDataSource(data.result);
    //     this.employees.paginator = this.paginator;
    //     this.employees.sort = this.sort;
    //   }
    // });
  }

  ngOnInit(): void {
    this.service.getEmployee().subscribe((data) => {
      if (data.status === 200) {
        data.result = [];
        this.isCondition = false;
        this.employees = new MatTableDataSource(data.result);
        this.employees.paginator = this.paginator;
        this.employees.sort = this.sort;
      }
    });
  }
}
