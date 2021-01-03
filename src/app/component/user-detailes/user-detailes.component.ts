import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { $ } from 'protractor';
import { NewUser } from 'src/app/models/newuser';
import { User } from 'src/app/models/users';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-detailes',
  templateUrl: './user-detailes.component.html',
  styles: [
  ]
})
export class UserDetailesComponent implements OnInit {

  constructor(private myservice:UsersService,private myId:ActivatedRoute,private rout:Router) {
    this.id=this.myId.snapshot.params.id
   }

  ngOnInit(): void {
    this.myservice.GetUserById(this.id).subscribe((response)=>
    {
      console.log(response.body)
        this.user=response.body as User
    },(error)=>
    {
      console.log(error)
    })
  }
id:number
user:User
name:string
email:string
city:string
editUser:NewUser
update(editForm)
{
  if(editForm.valid)
  {
    this.editUser={name:this.name,email:this.email,city:this.city}
    this.myservice.UpdateUser(this.editUser,this.id).subscribe((body)=>
    {
      this.rout.navigate([''])
     
      document.getElementById("exampleModal").click()
      console.log(body)
    },
    (error)=>{
      console.log(error)
    }
    )
  }
 
}
delete()
{
  
    this.myservice.DeleteUser(this.id).subscribe((body)=>
    {
      this.rout.navigate([''])
      console.log(body)
    },
    (error)=>{
      console.log(error)
    }
    )
  
}

}
