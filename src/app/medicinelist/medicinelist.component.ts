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
medicineinfo1:Medicine[]=[];
searchText:any;
usersInfo:Users[];
isUserLogin:boolean;
user:Users=new Users();
pUser:Users=new Users;
newUser:Users=new Users();
newaddress:Address=new Address();
cartMedicines:Medicine[]=[];
err:string="";
regResponse:string="";
itemAdded:string="Item added to cart";
num:number=0;
cart:boolean;

  constructor(private router:Router,private medicareservice:MedicareService,
    private passingdataservice:PassingdataService) { }
  ngOnInit(): void {

    this.getAllMedicine();
    this.getAllUsers();
    this.isUserLogin=false;
    this.cart=true;
    
    
 }

 getAllMedicine()
  {

    this.medicareservice.GetAllMedicine().subscribe(data =>{
      this.medicineinfo=data;
      for(let medicine of this.medicineinfo)
    {
      if(medicine.available==true)
      {
        this.medicineinfo1.push(medicine);
      }
    }
      
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
        
        this.pUser.id=user1.id;
        this.pUser.name=user1.name;
        this.pUser.password=user1.password;
        this.pUser.address=user1.address;
        this.passingdataservice.setUser(this.pUser);
        this.isUserLogin=true;
        
      }  
      else
      {
        this.err="Please check the credentials";
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
this.regResponse="New user registered";
}


addToCart(medicine:Medicine)
{
 // this.cartMedicines.push(medicine);
 
  this.passingdataservice.addMedicine(medicine);
  this.num++;
  this.cart=false;
}

goToCart()
{
  this.router.navigate([`cart`]);
}

}
