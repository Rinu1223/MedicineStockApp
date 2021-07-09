import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-medicine-details-component',
  templateUrl: './medicine-details-component.component.html',
  styleUrls: ['./medicine-details-component.component.css']
})
export class MedicineDetailsComponentComponent implements OnInit {
  stockDet=[]
  constructor(private dataservice:DataService) {

    let uID=localStorage.getItem("uID")
    this.dataservice.displayStock(uID)
     .subscribe((result:any)=>{
       if(result){
         this.stockDet=result.message
       }
      },
      (result)=>{
alert(result.error.message)
      
     })

   }

  ngOnInit(): void {
  }

}
