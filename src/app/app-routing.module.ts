import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsComponent } from './details/details.component';
import { AppComponent } from './app.component';
import { AddEmpComponent } from './add-emp/add-emp.component';

const routes: Routes = [
  {
    path: "", component:HomeComponent
  },
  {
    path:"details/:id",component:DetailsComponent
  },
  {
    path:"addEmp",component:AddEmpComponent
  },
  {
    path:"addemp/:id",component:AddEmpComponent
  },
  {
    path: "**", component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
