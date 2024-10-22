import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  baseUrl:string="http://localhost:8080/api/"

//Dependency Injection
  constructor(private http:HttpClient) { }

  getAllRecords(){
    return (this.http.get(`${this.baseUrl}getAllRecord`))
  }

  getParticularRecord(id:any){
    return (this.http.get(`${this.baseUrl}getparticularEmpById/${id}`))
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}allRecord`))
  }

  addEmployee(obj:any){
    return (this.http.post(`${this.baseUrl}addemp`,obj,{
      responseType:'text'
    }));
  }

  updateEmployee(obj:any){
    return (this.http.put(`${this.baseUrl}updateEmp/${obj.id}`,obj,{
       responseType:"text"
     }));
   }

   deleteEmployee(id:any){
    return (this.http.delete(`${this.baseUrl}deleteEmp/${id}`,{
      responseType:"text"
    }));
   }
}
