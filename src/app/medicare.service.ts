import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Admin } from './admin';
import { Medicine } from './medicine';
import { Users } from './users';
@Injectable({
  providedIn: 'root'
})
export class MedicareService {

  private baseUrl="http://localhost:8080";

  constructor(private httpclient:HttpClient) { }

  GetAllAdmins():Observable<Admin[]>{

    return this.httpclient.get<Admin[]>(`${this.baseUrl}/admin`);
  }

  UploadDetails(formData:any):Observable<Object>{

    return this.httpclient.post(`${this.baseUrl}/medicine`,formData);
   }

   GetAllMedicine():Observable<Medicine[]>{

    return this.httpclient.get<Medicine[]>(`${this.baseUrl}/medicine`);
   }

   DeleteItem(id:number):Observable<Object>{

    return this.httpclient.delete(`${this.baseUrl}/medicine/${id}`);
   }


   GetAllUsers():Observable<Users[]>{

    return this.httpclient.get<Users[]>(`${this.baseUrl}/users`);
  }


  AddUser(user:Users):Observable<Object>{

    return this.httpclient.post(`${this.baseUrl}/users`,user);
   }

  
}