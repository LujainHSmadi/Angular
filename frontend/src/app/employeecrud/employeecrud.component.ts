import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css']
})
export class EmployeecrudComponent {
EmployeeArray : any[] = [];
isResultLoaded = false;
isUpdateFormctive = false;

name:string = "";
address:string = "";
mobile:Number = 0;

currentEmployeeID = "";
constructor( private http: HttpClient){
this.getAllEmployee();
}
ngOnInit():void{
  this.getAllEmployee();
}
getAllEmployee()
{
  this.http.get("http://127.0.0.1:8000/api/employees")
  .subscribe((resultData: any)=>{
    this.isResultLoaded=true;
    console.log(resultData);
    this.EmployeeArray = resultData;
  });
  //Subscribe() is a method in Angular that connects the observer to observable events. Whenever any change is made in these observable, a code is executed and observes the results or changes using the subscribe method
}

register(){
let bodyData={

  'name' : this.name,
  'address':this.address,
  'mobile': this.mobile
};
this.http.post("http://127.0.0.1:8000/api/save",bodyData).subscribe((resultData:any)=>{
console.log(resultData);
alert("Employee Registered Successfuly");
this.getAllEmployee();
this.name = '';
this.address = '';
this.mobile =0;
});

}

setUpdate(data:any){
this.name = data.name;
this.address = data.address;
this.mobile = data.mobile;
this.currentEmployeeID = data.id;
}

UpdateRecords(){
  let bodyData={

    'name' : this.name,
    'address':this.address,
    'mobile': this.mobile
  };
  this.http.post("http://127.0.0.1:8000/api/update"+"/"+this.currentEmployeeID,bodyData).subscribe((resultData:any)=>{
    console.log(resultData);
    alert("Employee Updated Successfuly");
    this.getAllEmployee();
    this.name = '';
    this.address = '';
    this.mobile =0;
  });
}
save(){
  if(this.currentEmployeeID == ''){
    this.register();

  }
  else{
    this.UpdateRecords();
  }
}

}


