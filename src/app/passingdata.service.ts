import { Injectable } from '@angular/core';
import { Medicine } from './medicine';
import { Users } from './users';


@Injectable({
  providedIn: 'root'
})
export class PassingdataService {

  constructor() { }

  id:number;
  update:boolean;
  medicines:Medicine[]=[];
  cost:number;
  user:Users;
  isLogin:boolean=false;

  setIsLogin(isLogin:boolean)
  {
    this.isLogin=isLogin;
  }

  getIsLogin()
  {
    return this.isLogin;
  }

  setUser(user:Users)
  {
    this.user=user;
  }

  getUser()
  {
    return this.user;
  }


  setCost(cost:number)
  {
    this.cost=cost;
  }
 
  getCost()
  {
    return this.cost;
  }

  setId(id:number)
  {
    this.id=id;
  }

  getId()
  {
    return this.id;
  }

  setUpdate(update:boolean)
  {
    this.update=update;
  }

  getUpdate()
  {
    return this.update;
  }

  addMedicine(medicine:Medicine)
  {
    this.medicines.push(medicine);
    console.log(this.medicines);
  
  }

 /* deleteMedicine(medicine1:Medicine)
  {
    for(this.i=0;this.i<this.medicines.length;this.i++)
    {
       if(this.medicines[this.i].id==medicine1.id)
       {
         do
         {
          this.medicines[this.i].id=this.medicines[this.i+1].id;
          this.medicines[this.i].name=this.medicines[this.i+1].name;
          this.medicines[this.i].price=this.medicines[this.i+1].price;
          this.medicines[this.i].category=this.medicines[this.i+1].category;
          this.medicines[this.i].price=this.medicines[this.i+1].price;
          this.medicines[this.i].seller=this.medicines[this.i+1].seller;
          this.medicines[this.i].url=this.medicines[this.i+1].url;
          this.medicines[this.i].description=this.medicines[this.i+1].description;
          this.i++;
         }while(this.i<this.medicines.length)
       }
    }
  }*/

  getMedicines()
  {
    return this.medicines;
  }

}
