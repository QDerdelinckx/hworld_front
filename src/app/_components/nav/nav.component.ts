import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { userModel } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[];
  localStorage = localStorage;
  currentUser: userModel;

  get isConnected(): boolean {
    return localStorage.getItem('TOKEN') != null;
  }

  constructor(
    private userService: UserService
  ) { 
    this.currentUser = userService.getToken();
  }

  ngOnInit(): void {
    this.items = [
      {title: 'Accueil', icon:'globe-2', link: '/home'},
      {title: 'QG de ' + this.currentUser.username, icon:'home', children:[
        {title: 'Mes héros', icon:'award', link: '/myheroes'},
        {title: 'Mon inventaire', icon:'briefcase', link:''},
        {title: 'Mon équipage', icon:'car', link:'/mycrew'},
        {title: 'Journal de Bord', icon:'book-open', link:''}
      ]},
      {title: 'Marché', icon:'shopping-cart', children:[
        {title: 'Héros', icon:'award', link: '/heroes'},
        {title: 'Matériel', icon:'cube', link:'/items'}
      ]}
    ]
  }

}
