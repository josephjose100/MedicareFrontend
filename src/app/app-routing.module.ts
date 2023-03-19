import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'update',component:UpdateComponent},
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'medicine',component:MedicinelistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
