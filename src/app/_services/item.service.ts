import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { itemModel } from '../_models/item';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private _context$: BehaviorSubject<itemModel[]>

  get context$(): Observable<itemModel[]>{
    return this._context$.asObservable();
  }

  constructor(private httpClient: HttpClient) { 
    this._context$ = new BehaviorSubject<itemModel[]>([]);
  }

  refresh():void {
    this.httpClient.get<itemModel[]>(environment.apiEndPoint + '/item')
    .subscribe(x => this._context$.next(x));
  }
}
