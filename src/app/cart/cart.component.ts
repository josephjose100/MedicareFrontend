import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { PassingdataService } from '../passingdata.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  constructor(private passingdataservice:PassingdataService,private router:Router){}
   
  medicines:Medicine[];
  totalCost:number=0;
 
   ngOnInit(): void {

    this.medicines=this.passingdataservice.getMedicines();
    
    for(let i=0;i<this.medicines.length;i++)
    {
       this.totalCost+=this.medicines[i].price; 
       console.log(this.medicines[i]);
    }
   console.log("price",this.totalCost);
  }


  proceedToPay()
  {
    this.passingdataservice.setCost(this.totalCost);
    this.router.navigate([`pay`]);
  }
}
