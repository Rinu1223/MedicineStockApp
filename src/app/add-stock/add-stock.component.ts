import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {

  constructor(private fb:FormBuilder,private dataservice:DataService) { }

  ngOnInit(): void {
  }
  addform=this.fb.group({
    Medicine:['',Validators.required],
    Quantity:['',Validators.required],
    Price:['',Validators.required]
  })
  addStock(){
    if(this.addform.valid){
      let Medicine=this.addform.value.Medicine;
      let Quantity=this.addform.value.Quantity;
      let Price=this.addform.value.Price;
      let email=localStorage.getItem("uID")
     this.dataservice.addStock(email,Medicine,Quantity,Price)
    .subscribe((result:any)=>{
      if(result){
        alert(result.message);
        location.reload();
        
      }
    },
    (result)=>{

    alert(result.error.message)
    })
    }
    else{
      alert("Please fill all fiedls")
    }
  }
}
