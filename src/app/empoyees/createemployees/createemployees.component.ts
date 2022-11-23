import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { employeeBean } from 'src/app/employeeBean/employeeBean';
import { Employeeservice } from 'src/app/service/Employeeservice';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-createemployees',
  templateUrl: './createemployees.component.html',
  styleUrls: ['./createemployees.component.css']
})
export class CreateemployeesComponent implements OnInit {
  message: any;
  NgForm: any;
  EmployeeBean: employeeBean = new employeeBean("", "", "", "", new Date(""), 0, "", 0, 0,0);
  createEmployeeForm: any;
 
  constructor(private service: Employeeservice,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private DialogRef:MatDialogRef<CreateemployeesComponent>) { }
  
  ngOnInit(): void {
    if(this.editData){
      this.createEmployeeForm.controls['firstName'].setValue(this.editData.firstName);
      this.createEmployeeForm.controls['lastName'].setValue(this.editData.lastName);
      this.createEmployeeForm.controls['email'].setValue(this.editData.email);
      this.createEmployeeForm.controls['phoneNumber'].setValue(this.editData.phoneNumber);
      this.createEmployeeForm.controls['hireDate'].setValue(this.editData.hireDate);
      this.createEmployeeForm.controls['salary'].setValue(this.editData.salary);
      this.createEmployeeForm.controls['jobId'].setValue(this.editData.jobId);
      this.createEmployeeForm.controls['commisionPct'].setValue(this.editData.commisionPct);
      this.createEmployeeForm.controls['managerId'].setValue(this.editData.managerId);
      this.createEmployeeForm.controls['departmentId'].setValue(this.editData.departmentId);
    }
    
  }
  onSubmit(createEmployeeForm: NgForm){
  
    this.EmployeeBean.firstName = createEmployeeForm.value.firstName;
    this.EmployeeBean.lastName = createEmployeeForm.value.lastName;
    this.EmployeeBean.email = createEmployeeForm.value.email;
    this.EmployeeBean.phoneNumber = createEmployeeForm.value.phoneNumber;
    this.EmployeeBean.hireDate = createEmployeeForm.value.hireDate;
    this.EmployeeBean.salary = createEmployeeForm.value.salary;
    this.EmployeeBean.jobId = createEmployeeForm.value.jobId;
    this.EmployeeBean.commisionPct = createEmployeeForm.value.commisionPct;
    this.EmployeeBean.managerId = parseInt(createEmployeeForm.value.managerId);
    this.EmployeeBean.departmentId = parseInt(createEmployeeForm.value.departmentId);
    this.service.createEmployee(this.EmployeeBean).subscribe(data=>{
      if(data.status===200){
        alert("create employee success");
        this.DialogRef.close();
      }
      else{
        console.log(data.message);
      }
    });
  }
}
