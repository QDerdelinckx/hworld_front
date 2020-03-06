import { Component, OnInit, Optional } from '@angular/core';
import { HeroService } from 'src/app/_services/hero.service';
import { UserService } from 'src/app/_services/user.service';
import { userModel } from 'src/app/_models/user';
import { playingHeroModel } from 'src/app/_models/playingHero';
import { skillModel } from 'src/app/_models/skill';
import { bonusModel } from 'src/app/_models/bonus';

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
    hero.addedBonus = [];
    let score = skill.score;
    if(hero.roleCrew !== null){
      let roleBonusName = hero.roleCrew.name;
      let roleBonus = hero.roleCrew.bonus;
      let skillArch1 = skill.archetype1;
      let skillArch2 = skill.archetype2;
      for(let i =0; i<hero.roleCrew.bonus.length; i++){
        if((roleBonus[i].affected ==  skillArch1) || (roleBonus[i].affected == skillArch2)){
          score = score + roleBonus[i].bonus;
        } else {
          hero.addedBonus.push(roleBonus[i]);
        }
      }
    }
    return score;
  }

  

}
