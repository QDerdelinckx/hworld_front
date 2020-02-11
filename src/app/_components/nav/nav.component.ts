import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  items: NbMenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {title: 'Accueil', icon:'home', link: '/home'},
      {title: 'Héros', icon:'book-open', link: '/heroes'}
    ]
  }

}
