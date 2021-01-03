import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { UserDetailesComponent } from './component/user-detailes/user-detailes.component';


const route:Routes=[
  {path:"",redirectTo:"users",pathMatch:"full"},
  {path:"users",component:UserComponent},
  {path:"users/:id",component:UserDetailesComponent}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
