import { Injectable, ComponentFactoryResolver } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userModel } from '../_models/user';
import { Observable, BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  localStorage = localStorage;
  private _userContext$ : BehaviorSubject<userModel[]>;

  get userContext$(): Observable<userModel[]>{
    return this._userContext$.asObservable();
  }

  constructor(
    private httpClient: HttpClient
  ) { 
    this._userContext$ = new BehaviorSubject<userModel[]>([]);
  }

  getCurrentUser(tokenId: number):void {
    this.httpClient.get<userModel[]>(environment.apiEndPoint + '/user/' + tokenId)
    .subscribe(x => this._userContext$.next(x));
  }

  isConnected(): boolean {
    return localStorage.getItem('TOKEN') != null;
  }

  login(model: userModel): Observable<any> {
    return this.httpClient.post<any>(
      'http://localhost:8080/auth/login', 
      model,
      {
        headers:new HttpHeaders({         
          'Accept': 'application/json',
        	'Content-Type': 'application/json', 
          "Access-Control-Allow-Origin":"*",         
          "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",         
          "Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, X-Auth-Token, Accept"      
         })
      }
    );
  }

  getToken(): any{
    if(this.localStorage.getItem('TOKEN') != null){
      let token = JSON.parse(localStorage.getItem('TOKEN'));
      return token;
    }
    return null;
  }

  getUser(): Observable<userModel>{
    return this.getToken();
  }

}
