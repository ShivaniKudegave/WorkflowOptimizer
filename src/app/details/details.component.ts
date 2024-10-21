import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Employee } from '../module/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  empObj=<Employee>{};
  constructor(private route:ActivatedRoute,
    private service:HttpServiceService
  ){}
  ngOnInit():void{
    this.getDataFromUrl();
  }
  getDataFromUrl(){
    this.route.paramMap
    .subscribe((param)=>{
      //console.log(param.get("id"));
      this.service.getParticularRecord(param.get("id"))
      .subscribe((response:any)=>{
        //console.log(response)
       this.empObj=response;
      })
    })
      
    
  }
}
