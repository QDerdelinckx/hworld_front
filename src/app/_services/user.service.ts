import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userModel } from '../_models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(model: userModel): Observable<string> {
    return this.httpClient.post<string>(
      environment.apiEndPoint + '/auth/login', 
      model
    );
  }

}
