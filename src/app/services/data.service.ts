import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  options={
    withCredentials: true
  }
  constructor(private http:HttpClient) { }
  signUp(uname:any,email:any,password:any){
    const data={
      uname:uname,
      email:email,
      password:password
    }
    
    return this.http.post('http://localhost:3000/signUp',data,this.options)

  }
  login(email:any,password:any){
    const data={
      email:email,
      password:password
    }
    
    return this.http.post('http://localhost:3000/login',data)

  }
  addStock(email:any,Medicine:any,Quantity:any,Price:any){
    const data={
      email:email,
      Medicine:Medicine,
      Quantity:Quantity,
      Price:Price

    }
    
return this.http.post('http://localhost:3000/addStock',data,this.options)

  }
  displayStock(email:any){
    const data={
      email:email

    }
    
return this.http.post('http://localhost:3000/displayStock',data,this.options)

  }
  deleteMedicine(email:any,indexNum:any){
    const data={
      email:email,
      index:indexNum

    }
    
return this.http.post('http://localhost:3000/deleteMedicine',data,this.options)

  }
  update(email:any,indexNum:any,Medicine:any,Quantity:any,Price:any){
    const data={
       email:email,
       indexNum:indexNum,
       Medicine:Medicine,
       Quantity:Quantity,
       Price:Price
     }
     return this.http.post('http://localhost:3000/updateStock',data,this.options)
     
     
   }
}
