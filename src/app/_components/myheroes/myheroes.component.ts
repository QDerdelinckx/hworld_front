import { Component, OnInit } from '@angular/core';
import { heroModel } from 'src/app/_models/hero';
import { HeroService } from 'src/app/_services/hero.service';
import { UserService } from 'src/app/_services/user.service';
import { userModel } from 'src/app/_models/user';

@Component({
  selector: 'app-myheroes',
  templateUrl: './myheroes.component.html',
  styleUrls: ['./myheroes.component.scss']
})
export class MyheroesComponent implements OnInit {

  imgUrl: String;
  myHeroes: heroModel[];
  currentUser: userModel;

  constructor(
    private heroService: HeroService,
    private userService: UserService
  ) { 
    this.currentUser = userService.getToken();
  }

  ngOnInit(): void {
    this.imgUrl = "../../../assets/images/";
    this.heroService.context$.subscribe(list => {
      this.myHeroes = list;
    });
    this.heroService.getHeroesByPlayerId(this.currentUser.id);
  }

}
