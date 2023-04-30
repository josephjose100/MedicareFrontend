import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicareService } from '../medicare.service';
import { Medicine } from '../medicine';
import { PassingdataService } from '../passingdata.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit{

  medicine:Medicine=new Medicine();
  selectedFile:File;
  update:boolean=false;
  fileSelected:boolean;


  ngOnInit(): void {
    this.medicine.id=this.passingdataservice.getId();
    this.update=this.passingdataservice.getUpdate();
    this.fileSelected=true;
  }

  constructor(private router:Router,private medicareservice:MedicareService,
    private passingdataservice:PassingdataService) { }


onFileSelected(event:any)
{
 if(event.target.files)
 {
   this.selectedFile=event.target.files[0];
   this.fileSelected=false;
   
 }
}

updateMedicine(frmNew:NgForm)
{
  console.log(this.medicine);
  const formData = new FormData();
  formData.append('medicine', JSON.stringify(this.medicine));
  formData.append('file', this.selectedFile, this.selectedFile.name);
  this.medicareservice.UploadDetails(formData).subscribe(data =>{
   
    this.router.navigate([`login`]);

   
   });

}


}
