import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';

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
    private router: Router
    ){

    }

}
