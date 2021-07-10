import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-medicine-details-component',
  templateUrl: './medicine-details-component.component.html',
  styleUrls: ['./medicine-details-component.component.css']
})
export class MedicineDetailsComponentComponent implements OnInit {
    stockDet=[];
    indexNum="";
    Medicine=""
    Quantity=""
    Price=""
    total=0
  constructor(private dataservice:DataService) {

    let uID=localStorage.getItem("uID")
    this.dataservice.displayStock(uID)
     .subscribe((result:any)=>{
       if(result){
         this.stockDet=result.message
        for (let index = 0; index < this.stockDet.length; index++) {
          this.total +=  (this.stockDet[index].Quantity)*(this.stockDet[index].Price)
         }
        }
      },
      (result)=>{
alert(result.error.message)
      
     })

   }

  ngOnInit(): void {
  }
  deleteRow(indexNum:any){
    let uID=localStorage.getItem("uID")
    this.dataservice.deleteMedicine(uID,indexNum)
      .subscribe((result:any)=>{
      if(result){
        alert(result.message)
        location.reload();
      }
      },
      (result)=>{
      alert(result.error.message)
     
     })
     }

     updateRow(indexNo:any,Medicine:any,Quantity:any,Price:any){
      document.getElementById("editDiv").setAttribute("style", "display:block;")
      this.indexNum=indexNo
      this.Medicine=Medicine
      this.Quantity=Quantity
      this.Price=Price
    }

     editMedicine(indexNum:any,Medicine:any,Quantity:any,Price:any){
      let uID=localStorage.getItem("uID")
      this.dataservice.update(uID,indexNum,Medicine,Quantity,Price)
      .subscribe((result:any)=>{
       if(result){
         alert(result.message)
         location.reload();
       }
       },
       (result)=>{
       alert(result.error.message)
      
      })
     }
}
