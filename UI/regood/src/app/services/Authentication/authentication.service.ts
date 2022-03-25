import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  endpoint = 'http://vincentprivatenas.mynetgear.com:7070/Authentication/rest/';

  constructor(private httpClient: HttpClient) { }

  login(loginInfo): Observable<any> {
    return this.httpClient.post(this.endpoint+'login', loginInfo);
  }


  registerUser(regInfo): Observable<any> {
    return this.httpClient.post(this.endpoint+'register_user', regInfo);
  }
}
