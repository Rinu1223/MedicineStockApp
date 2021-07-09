import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.css']
})
export class SignupComponentComponent implements OnInit {

  constructor(private fb:FormBuilder,private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  registerform=this.fb.group({
    uname:['',Validators.required] ,
    email:['',Validators.required],
    password:['',Validators.required]
   })
   signUp(){
    if(this.registerform.valid){
    let uname=this.registerform.value.uname;
    let email=this.registerform.value.email;
    let password=this.registerform.value.password;
    this.dataservice.signUp(uname,email,password)
   .subscribe((result:any)=>{
     if(result){
       alert(result.message)
       this.router.navigateByUrl('')
     }
   },
   (result)=>{
   alert(result.error.message)
   
   })
  }
    else
    {
      alert("Invalid form")
    }
  
  }
}
