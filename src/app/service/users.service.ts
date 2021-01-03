import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
readonly baseurl="http://localhost:8080/users"
  constructor(private myclient:HttpClient) { }
  GetAllUsers(){
    let response=this.myclient.get(this.baseurl,{observe:"response"})
    return response
  }
  GetUserById(id){
    return this.myclient.get(`${this.baseurl}/${id}`,{observe:"response"})
  }
  AddUser(user){
    return this.myclient.post(this.baseurl,user,{observe:"response"})
  }
  UpdateUser(user,id){
    return this.myclient.put(`${this.baseurl}/${id}`,user,{observe:"body"})
  }
  DeleteUser(id){
    return this.myclient.delete(`${this.baseurl}/${id}`,{observe:"body"})
  }
}
