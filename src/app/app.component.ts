import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hworld';

  get isConnected(): boolean {
    return localStorage.getItem('TOKEN') != null;
  }

  localStorage = localStorage;
  constructor(
    private sidebarService:  NbSidebarService,
    private router: Router
    ){}

  login(){
    this.router.navigateByUrl("/login");
  }

}


