import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../admin';
import { MedicareService } from '../medicare.service';
import { Medicine } from '../medicine';



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
  
  constructor(private router:Router,private medicareservice:MedicareService) { }

  ngOnInit(): void {
     this.isLogin=false;
     this.getAllAdmins();
  }

  getAllAdmins()
  {

    this.medicareservice.GetAllAdmins().subscribe(data =>{
      this.admins=data;
      console.log(this.admins);
    });

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
   
     this.getAllAdmins();
     
   
   });

}
}


  
