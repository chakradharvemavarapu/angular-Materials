import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateemployeesComponent } from './empoyees/createemployees/createemployees.component';
import { ViewemployeesComponent } from './empoyees/viewemployees/viewemployees.component';

const routes: Routes = [
  {path :'viewemployees', component:ViewemployeesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
