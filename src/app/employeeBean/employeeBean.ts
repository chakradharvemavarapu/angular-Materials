export class employeeBean {
    public firstName: string;
    public lastName: string;
    public email: string;
    public phoneNumber: string;
    public hireDate: Date;
    public salary: number;
    public jobId: string;
    public commisionPct:number;
    public managerId: number;
    public departmentId: number;
  reset: any;
  controls: any;

    constructor( firstName: string, lastName: string, email: string, phoneNumber: string, 
        hireDate: Date, salary: number, jobId: string,commisionPct:number,  managerId: number, departmentId: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.hireDate = hireDate;
        this.salary = salary;
        this.jobId = jobId;
        this.commisionPct = commisionPct;
        this.managerId = managerId;
        this.departmentId = departmentId;
    }
}