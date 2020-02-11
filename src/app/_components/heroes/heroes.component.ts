import { Component, OnInit } from '@angular/core';
import { heroModel } from 'src/app/_models/hero';
import { HeroService } from 'src/app/_services/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  imgUrl: String;
  allHeroes: heroModel[];

  constructor(
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.imgUrl = "../../../assets/images/";
    this.heroService.context$.subscribe(list => {
      this.allHeroes = list;
      console.log(this.allHeroes);
    });
    this.heroService.refresh();
  }

}
