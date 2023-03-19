import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassingdataService {

  constructor() { }

  id:number;
  update:boolean;


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


}
