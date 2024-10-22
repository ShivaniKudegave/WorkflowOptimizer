import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  //creating property
  empData:any[]=[];

  //creating property for applying validation to ratio button
  isSelect:boolean=false;

  //creating property for storing id
  id!:any;

  constructor(private service:HttpServiceService,
      private router:Router){}


  ngOnInit(): void {
    this.getDataFromBackend();
  }
  getDataFromBackend(){
    this.service.getAllRecords()
    .subscribe((response:any)=>{
      //console.log(response)
      this.empData=response;
    })
  }

  onEdit(id:any){
    this.isSelect = true;
    this.id = id;
  }

  onUpdate(){
    if(this.isSelect){
      //update record logic
      this.router.navigate(['/addemp',this.id])
    }else{
      alert("Please selsect a record to update a record");
    }
  }

  onDelete(){
    if(this.isSelect){
      //Logic for Delete
      if(confirm("Do you want to delete this record...")){
        this.service.deleteEmployee(this.id)
        .subscribe((response)=>{
          console.log(response);
          this.getDataFromBackend();
        })
      }

    }else{
      alert("Please select a record to delete a record....")
    }
  }
}
