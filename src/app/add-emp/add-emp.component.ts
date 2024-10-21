import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Employee } from '../module/employee';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { __param } from 'tslib';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {

  allCountry:any[]=[];
  isUpdate:boolean=false;

  addData:Employee=<Employee>{};

  constructor(private service:HttpServiceService,
              private router:Router,
              private route:ActivatedRoute
  ){}
  ngOnInit(): void {
    this.getAllCountryFromBackend();
    this.getDataFromUrl();
  }

  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      console.log(param.get("id"));
      this.service.getParticularRecord(param.get("id"))
      .subscribe((response:any)=>{
        //console.log(response)
        this.addData=response;
        this.isUpdate=true;
      })
    })
  }

  getAllCountryFromBackend(){
    this.service.getAllCountry()
    .subscribe((response:any)=>{
     // console.log(response);
      this.allCountry=response
    })
  }
  onSubmit(){

    if(this.isUpdate){
      //Update logic API
      this.addData.updatedBy = "admin";
      this.addData.updatedDate = Date.now();
      this.service.updateEmployee(this.addData)
      .subscribe((response)=>{
        console.log(response)
        this.router.navigate(['']);
      })
    }else{
      //Add new Record
      this.addData.createdBy="admin";
    this.addData.createdDate=Date.now();
    this.addData.updatedBy="admin";
    this.addData.updatedDate=Date.now();

    this.service.addEmployee(this.addData)
    .subscribe((response)=>{
     // console.log(response);
     this.router.navigate([''])
    })
    }
    ///////////////////
  }
}

