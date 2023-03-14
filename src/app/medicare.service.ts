import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Admin } from './admin';
@Injectable({
  providedIn: 'root'
})
export class MedicareService {

  private baseUrl="http://localhost:8081";

  constructor(private httpclient:HttpClient) { }

  GetAllAdmins():Observable<Admin[]>{

    return this.httpclient.get<Admin[]>(`${this.baseUrl}/admin`);
  }

  UploadDetails(formData:any):Observable<Object>{

    return this.httpclient.post(`${this.baseUrl}/medicine`,formData);
   }

  
}