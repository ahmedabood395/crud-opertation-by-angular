import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/users';
import { NewUser } from 'src/app/models/newuser';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
  ]
})
export class UserComponent implements OnInit {

  constructor(private myservice:UsersService) { }

  ngOnInit(): void {
    this.myservice.GetAllUsers().subscribe((response)=>{
      this.lstuser=response.body as Array<User>
      console.log(response.body)
    },(error)=>{
      console.log(error)
    })
  }
lstuser:Array<User>
name:string
email:string
city:string
user:NewUser
create(addForm)
{
  if(addForm.valid){
    this.user={name:this.name,city:this.city,email:this.email}
    this.myservice.AddUser(this.user).subscribe((response)=>
    {
      this.ngOnInit()
      console.log(response.body)
    },
    (error)=>
    {
      console.log(error)
    })
  }
 
}
}
