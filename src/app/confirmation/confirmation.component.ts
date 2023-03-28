import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicine } from '../medicine';
import { PassingdataService } from '../passingdata.service';
import { Users } from '../users';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit{


  medicines:Medicine[];
  totalCost:number;
  pUser:Users;

  constructor(private router:Router,private passingdataservice:PassingdataService){}

  ngOnInit(): void {
    
    this.medicines=this.passingdataservice.getMedicines();
    this.totalCost=this.passingdataservice.getCost();
    this.pUser=this.passingdataservice.getUser();


  }

  goToHome()
  {
    this.router.navigate([`home`]);
  }
}
