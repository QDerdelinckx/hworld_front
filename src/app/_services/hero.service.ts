import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { heroModel } from '../_models/hero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { playingHeroModel } from '../_models/playingHero';
import { roleCrewModel } from '../_models/roleCrew';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private _heroContext$: BehaviorSubject<heroModel[]>;
  private _playerHeroContext$: BehaviorSubject<playingHeroModel[]>;
  private _roleCrewContext$ : BehaviorSubject<roleCrewModel[]>;

  get heroContext$(): Observable<heroModel[]>{
    return this._heroContext$.asObservable();
  }

  get playerHeroContext$(): Observable<playingHeroModel[]>{
    return this._playerHeroContext$.asObservable();
  }

  get roleCrewContext$() : Observable<roleCrewModel[]> {
    return this._roleCrewContext$.asObservable();
  }

  constructor(private httpClient: HttpClient) {
    this._heroContext$ = new BehaviorSubject<heroModel[]>([]);
    this._playerHeroContext$ = new BehaviorSubject<playingHeroModel[]>([]);
    this._roleCrewContext$ = new BehaviorSubject<roleCrewModel[]>([]);
   }

  getAllHeroes():void {
    this.httpClient.get<heroModel[]>(environment.apiEndPoint + '/hero')
    .subscribe(x => this._heroContext$.next(x));
  }

  getHeroesByPlayerId(playerId: number):void {
    this.httpClient.get<playingHeroModel[]>(environment.apiEndPoint + '/user/' + playerId + '/heroes')
    .subscribe(x => this._playerHeroContext$.next(x));
  }

  getAllCrewRole() : void {
    this.httpClient.get<roleCrewModel[]>(environment.apiEndPoint+'/crew')
    .subscribe(x => this._roleCrewContext$.next(x));
  }

  addRoleCrew(playingHeroModel : playingHeroModel)
  {
    return this.httpClient.post<playingHeroModel>(environment.apiEndPoint+'/crew',playingHeroModel);
  }

  nullifyRoleCrew(playingHeroModel : playingHeroModel)
  {
    return this.httpClient.post<playingHeroModel>(environment.apiEndPoint+'/crew/reset', playingHeroModel);
  }

}
