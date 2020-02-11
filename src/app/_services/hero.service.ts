import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { heroModel } from '../_models/hero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  private _context$: BehaviorSubject<heroModel[]>

  get context$(): Observable<heroModel[]>{
    return this._context$.asObservable();
  }

  constructor(private httpClient: HttpClient) {
    this._context$ = new BehaviorSubject<heroModel[]>([]);
   }

   refresh():void {
    this.httpClient.get<heroModel[]>(environment.apiEndPoint + '/hero')
    .subscribe(x => this._context$.next(x));
  }

}
