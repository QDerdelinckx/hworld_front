import { Component, OnInit } from '@angular/core';
import { heroModel } from 'src/app/_models/hero';
import { HeroService } from 'src/app/_services/hero.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/_services/user.service';
import { userModel } from 'src/app/_models/user';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  imgUrl: String;
  allHeroes: heroModel[];
  currentUser: userModel;

  constructor(
    private userService: UserService,
    private heroService: HeroService,
    private httpClient: HttpClient 
  ) { }

  ngOnInit(): void {
    this.imgUrl = "../../../assets/images/";
    this.currentUser = this.userService.getToken();
    this.heroService.heroContext$.subscribe(list => {
      this.allHeroes = list;
    });
    this.heroService.getAllHeroes();
  }

  buy(heroId: number, userId: number): void {
    userId = this.currentUser.id;
    this.httpClient.post<null>('http://localhost:8080/shop/buy/' + heroId + "/" + userId, null).subscribe();
  }

}
