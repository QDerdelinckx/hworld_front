import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[];
  localStorage = localStorage;

  get isConnected(): boolean {
    return localStorage.getItem('TOKEN') != null;
  }

  constructor() { }

  ngOnInit(): void {
    if(!this.isConnected){}
    this.items = [
      {title: 'Accueil', icon:'home', link: '/home'},
      {title: 'Marché', icon:'shopping-cart', children:[
        {title: 'Héros', icon:'book-open', link: '/heroes'},
        {title: 'Matériel', icon:'shopping-bag', link:'/items'}
      ]}
    ]
  }

}
