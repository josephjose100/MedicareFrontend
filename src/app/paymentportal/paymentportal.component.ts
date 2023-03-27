import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PassingdataService } from '../passingdata.service';

@Component({
  selector: 'app-paymentportal',
  templateUrl: './paymentportal.component.html',
  styleUrls: ['./paymentportal.component.css']
})
export class PaymentportalComponent implements OnInit{

  constructor(private router:Router,private passingdataservice:PassingdataService){}

  totalCost:number;
  

  ngOnInit(): void {
    
   this.totalCost=this.passingdataservice.getCost();
  }

  goToConfirmation()
  {

    this.router.navigate([`confirm`]);
  }


}
