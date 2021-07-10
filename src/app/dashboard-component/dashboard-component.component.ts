import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  user=""
  currentUser=""
  constructor(private router:Router) {
    this.user= localStorage.getItem("name")
    localStorage.getItem("uID")
   }

  ngOnInit(): void {
  }
  Logout(){
    this.currentUser == null
    localStorage.setItem("uID","");
    localStorage.setItem("name","");
    this.router.navigateByUrl('')
  }
  
}
