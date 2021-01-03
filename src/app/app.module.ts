import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersService } from './service/users.service';
import {HttpClientModule} from '@angular/common/http';
import { UserComponent } from './component/user/user.component';
import { UserDetailesComponent } from './component/user-detailes/user-detailes.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserDetailesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
