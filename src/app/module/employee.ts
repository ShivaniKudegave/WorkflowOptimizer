export interface Employee{
    id:number,
    name:string,
    mobileno:string,
    salary:number,
    emailid:string,
    department:string,
    status:string,
    createdBy:String,
    createdDate:number,
    updatedBy:string,
    updatedDate:number,
    country:{
        cid:number,
        cname:string
    }
}