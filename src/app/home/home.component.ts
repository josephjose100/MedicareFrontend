import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicareService } from '../medicare.service';
import { Medicine } from '../medicine';
import { PassingdataService } from '../passingdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  medicineinfo:Medicine[];

  ngOnInit(): void {
   
    this.getAllMedicine();
 }

 constructor(private router:Router,private medicareservice:MedicareService,
  private passingdataservice:PassingdataService) { }


 getAllMedicine()
  {

    this.medicareservice.GetAllMedicine().subscribe(data =>{
      this.medicineinfo=data;
      
    });
    console.log(this.medicineinfo);
  }

}
