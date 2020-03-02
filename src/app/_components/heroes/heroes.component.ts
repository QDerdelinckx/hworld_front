import { Component, OnInit } from '@angular/core';
import { heroModel } from 'src/app/_models/hero';
import { HeroService } from 'src/app/_services/hero.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/_services/user.service';
import { userModel } from 'src/app/_models/user';
import { playingHeroModel } from 'src/app/_models/playingHero';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  imgUrl: String;
  allHeroes: heroModel[];
  myHeroes: playingHeroModel[];
  currentUser: userModel;

  constructor(
    private userService: UserService,
    private heroService: HeroService,
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.imgUrl = "../../../assets/images/";
    this.currentUser = this.userService.getToken();
    let userId = this.currentUser.id;
    this.heroService.heroContext$.subscribe(list => {
      this.allHeroes = list;
    });
    this.heroService.getAllHeroes();
    this.heroService.playerHeroContext$.subscribe(list => {
      this.myHeroes = list;
    });
    this.heroService.getHeroesByPlayerId(userId);
    this.userService.getCurrentUser(userId);
  }
  
  buy(heroId: number, userId: number): void {
    userId = this.currentUser.id;
    this.httpClient.post<null>('http://localhost:8080/shop/buy/' + heroId + "/" + userId, null).subscribe(
      () => this.heroService.getHeroesByPlayerId(userId)
    );
  }

  alreadyowned(name: string): boolean{
    for(let i=0; i<this.myHeroes.length; i++){
      if(this.myHeroes[i].name == name){
        return true;
      }
    }
    return false;
  }

  modified(score: number): number{
    score = 7;
    return score;
  }

}
