import { Component, OnInit } from '@angular/core';
import { playingHeroModel } from 'src/app/_models/playingHero';
import { userModel } from 'src/app/_models/user';
import { HeroService } from 'src/app/_services/hero.service';
import { UserService } from 'src/app/_services/user.service';
import { roleCrewModel } from 'src/app/_models/roleCrew';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-crew',
  templateUrl: './my-crew.component.html',
  styleUrls: ['./my-crew.component.scss']
})
export class MyCrewComponent implements OnInit {

  imgUrl: String;
  myHeroes: playingHeroModel[];
  currentUser: userModel;
  selectRoleModel : roleCrewModel;
  listRole : roleCrewModel[];
  selectHero : playingHeroModel;

  constructor(private heroService: HeroService,
    private userService: UserService) {
      this.currentUser = userService.getToken();

     }

     ngOnInit(): void {
      this.imgUrl = "../../../assets/images/";
      this.heroService.playerHeroContext$.subscribe(list => {
        this.myHeroes = list;
      });

      this.heroService.roleCrewContext$.subscribe(list => {
        this.listRole = list;
      });
        
      this.heroService.getHeroesByPlayerId(this.currentUser.id);
      this.heroService.getAllCrewRole();
      this.selectRoleModel = null;
      this.selectHero = null;

    }

    selectRole (event : roleCrewModel)
    {
      this.selectRoleModel = event;
    }

    addRole(h : playingHeroModel)
    {
      if (this.selectRoleModel != null)
      {
        h.roleCrew = this.selectRoleModel;
        this.heroService.addRoleCrew(h).subscribe();
        this.selectRoleModel = null;
      }
    }

}
