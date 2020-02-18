import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { heroModel } from '../_models/hero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { playingHeroModel } from '../_models/playingHero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private _heroContext$: BehaviorSubject<heroModel[]>;
  private _playerHeroContext$: BehaviorSubject<playingHeroModel[]>;

  get heroContext$(): Observable<heroModel[]>{
    return this._heroContext$.asObservable();
  }

  get playerHeroContext$(): Observable<playingHeroModel[]>{
    return this._playerHeroContext$.asObservable();
  }

  constructor(private httpClient: HttpClient) {
    this._heroContext$ = new BehaviorSubject<heroModel[]>([]);
    this._playerHeroContext$ = new BehaviorSubject<playingHeroModel[]>([]);
   }

  getAllHeroes():void {
    this.httpClient.get<heroModel[]>(environment.apiEndPoint + '/hero')
    .subscribe(x => this._heroContext$.next(x));
  }

  getHeroesByPlayerId(playerId: number):void {
    this.httpClient.get<playingHeroModel[]>(environment.apiEndPoint + '/user/' + playerId + '/heroes')
    .subscribe(x => this._playerHeroContext$.next(x));
  }

  //insert(model: playingHeroModel)

}
