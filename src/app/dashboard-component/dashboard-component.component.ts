import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-component',
  templateUrl: './dashboard-component.component.html',
  styleUrls: ['./dashboard-component.component.css']
})
export class DashboardComponentComponent implements OnInit {
  user=""
  constructor() {
    this.user= localStorage.getItem("name")
   }

  ngOnInit(): void {
  }

}
