import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private fb:FormBuilder,private dataservice:DataService,private router:Router) { }

  ngOnInit(): void {
  }
  loginform=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required]
  })
  login(){

    if(this.loginform.valid){
      let email=this.loginform.value.email;
      let password=this.loginform.value.password;
      this.dataservice.login(email,password)
      .subscribe((result:any)=>{
        if(result){
          localStorage.setItem("name",result.name)
          localStorage.setItem("uID",result.uID)
          alert(result.message);
          this.router.navigateByUrl("dashboard");
       
        }
      },
      (result)=>{
        alert(result.error.message);
        
      
      })
     }
     else{
       alert("Invalid form")
     }
    
  }
  
}
