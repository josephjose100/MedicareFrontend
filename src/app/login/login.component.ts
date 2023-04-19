import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { MedicareService } from '../medicare.service';
import { Medicine } from '../medicine';
import { PassingdataService } from '../passingdata.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  isLogin:boolean;
  name:string;
  password:string;
  medicine:Medicine=new Medicine();
  admins:Admin[];
  pAdmin:Admin=new Admin();
  selectedFile:File;
  medicineinfo:Medicine[];
  new:boolean;
  constructor(private router:Router,private medicareservice:MedicareService,
    private passingdataservice:PassingdataService) { }

  ngOnInit(): void {
     this.isLogin=true;
     this.getAllAdmins();
     this.getAllMedicine();
     this.new=true;
  }

  getAllAdmins()
  {

    this.medicareservice.GetAllAdmins().subscribe(data =>{
      this.admins=data;
      console.log(this.admins);

    });

  }


 
  getAllMedicine()
  {

    this.medicareservice.GetAllMedicine().subscribe(data =>{
      this.medicineinfo=data;
      
    });
    console.log(this.medicineinfo);
  }


  
  validateCredentials()
  {
    
    for (let admin of this.admins) {
      
      if((admin.name==this.name)&&(admin.password==this.password))
      {
        
        this.pAdmin.id=admin.id;
        this.pAdmin.name=this.name;
        this.pAdmin.password=this.password;
        this.isLogin=true;
        
      }   
  }
}

onFileSelected(event:any)
{
 if(event.target.files)
 {
   this.selectedFile=event.target.files[0];
   
 }
}
  


addMedicine(frmNew:NgForm)
{
  console.log(this.medicine);
  const formData = new FormData();
  formData.append('medicine', JSON.stringify(this.medicine));
  formData.append('file', this.selectedFile, this.selectedFile.name);
  this.medicareservice.UploadDetails(formData).subscribe(data =>{
   
     this.getAllMedicine();
     this.medicine.name="";
     this.medicine.category="";
     this.medicine.price=0;
     this.medicine.description="";
     this.medicine.url="";
     this.medicine.seller="";

   
   });

}

deleteItem(id:number)
{
  let ch=confirm("do you want to delete");
  if(ch)
    {
      this.medicareservice.DeleteItem(id).subscribe(data =>{
        this.getAllMedicine();
      });
    }
  }


  updateItem(id:number)
  {
    this.passingdataservice.setId(id);
    this.passingdataservice.setUpdate(true);
    this.router.navigate([`update`]);
  }

  enableDisable(id:number)
  {
    console.log(id);
    for(let medicine of this.medicineinfo)
    {
      console.log(medicine.id);
      if(medicine.id==id)
      {
        this.medicareservice.enableDisable(medicine).subscribe(data=>{
        this.getAllMedicine();

        });

      }
    }
   
 
  }

  update()
  {
    this.new=false;
  }


}


  
