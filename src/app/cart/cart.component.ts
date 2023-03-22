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

  constructor(private passingdataservicd:PassingdataService,private router:Router){}
   
  medicines:Medicine[];
 
   ngOnInit(): void {
   // this.medicines=this.passingdataservicd.getMedicines();


  }

}
