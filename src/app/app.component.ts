import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';
import { UserService } from './_services/user.service';
import { userModel } from './_models/user';
import * as jwt_decode from "jwt-decode";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hworld';

  currentUser: userModel;

  constructor(
    private userService: UserService,
    private sidebarService: NbSidebarService,
    private router: Router
    ){
      if(!userService.isConnected()){
        this.router.navigateByUrl("/login");
      } else {
        console.log(userService.getToken());
        this.currentUser = userService.getToken();
      }
    }

    isConnected(): boolean {
      return this.userService.isConnected();
    }

    login(){
      this.userService.login;
    }

    logout(){
      localStorage.clear();
      this.router.navigateByUrl("/login");
    }

}


