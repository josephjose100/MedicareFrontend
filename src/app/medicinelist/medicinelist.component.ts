import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from '../address';
import { MedicareService } from '../medicare.service';
import { Medicine } from '../medicine';
import { PassingdataService } from '../passingdata.service';
import { Users } from '../users';

@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent implements OnInit{
  
medicineinfo:Medicine[];
searchText:any;
usersInfo:Users[];
isUserLogin:boolean;
user:Users=new Users();
pUser:Users=new Users;
newUser:Users=new Users();
newaddress:Address=new Address();
cartMedicines:Medicine[]=[];



  constructor(private router:Router,private medicareservice:MedicareService,
    private passingdataservice:PassingdataService) { }
  ngOnInit(): void {
    this.getAllMedicine();
    this.getAllUsers();
    this.isUserLogin=true;
    
    
 }

 getAllMedicine()
  {

    this.medicareservice.GetAllMedicine().subscribe(data =>{
      this.medicineinfo=data;
      
    });
   
  }


  getAllUsers()
  {

    this.medicareservice.GetAllUsers().subscribe(data =>{
      this.usersInfo=data;
      
    });
   
  }



  validateCredentials()
  {
    for (let user1 of this.usersInfo) {
      if((user1.name==this.user.name)&&(user1.password==this.user.password))
      {
        
        this.pUser.id=this.user.id;
        this.pUser.name=this.user.name;
        this.pUser.password=this.user.password;
        this.isUserLogin=true;
        
      }   
  }
}

registerUser()
{
 this.newUser.address=this.newaddress;
 this.medicareservice.AddUser(this.newUser).subscribe(data =>{
   
  this.getAllUsers();
  this.newUser.name="";
  this.newUser.password="";
  this.newaddress.houseNo="";
  this.newaddress.locality="";
  this.newaddress.district="";
  this.newaddress.state="";


});
}


addToCart(medicine:Medicine)
{
 // this.cartMedicines.push(medicine);
 
  this.passingdataservice.addMedicine(medicine);

  
}

goToCart()
{
  this.router.navigate([`cart`]);
}

}
