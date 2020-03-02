import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/_services/hero.service';
import { UserService } from 'src/app/_services/user.service';
import { userModel } from 'src/app/_models/user';
import { playingHeroModel } from 'src/app/_models/playingHero';
import { skillModel } from 'src/app/_models/skill';

@Component({
  selector: 'app-myheroes',
  templateUrl: './myheroes.component.html',
  styleUrls: ['./myheroes.component.scss']
})
export class MyheroesComponent implements OnInit {

  imgUrl: String;
  myHeroes: playingHeroModel[];
  currentUser: userModel;

  constructor(
    private heroService: HeroService,
    private userService: UserService
  ) { 
    this.currentUser = userService.getToken();
  }

  ngOnInit(): void {
    this.imgUrl = "../../../assets/images/";
    this.heroService.playerHeroContext$.subscribe(list => {
      this.myHeroes = list;
      this.myHeroes.sort((a, b) => (a.id > b.id) ? 1 : -1);
    });
    this.heroService.getHeroesByPlayerId(this.currentUser.id);
  }

  modified(hero: playingHeroModel, skill: skillModel): number{
    let roleBonusName = hero.roleCrew.name;
    let roleBonus = hero.roleCrew.bonus;
    let score = skill.score;
    let skillArch1 = skill.archetype1;
    let skillArch2 = skill.archetype2;
    for(let i =0; i<hero.skills.length; i++){
      if((roleBonus[i].affected ==  skillArch1) || (roleBonus[i].affected == skillArch2)){
        score = score + roleBonus[i].bonus;
      }
    }
    return score;
  }

}
