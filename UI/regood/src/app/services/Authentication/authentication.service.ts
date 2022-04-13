import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  endpoint = 'http://vincentprivatenas.mynetgear.com:7070/reGood/rest/';
  endpointAuth = 'http://vincentprivatenas.mynetgear.com:7070/Authentication/rest/';

  constructor(private httpClient: HttpClient) { }

  login(loginInfo): Observable<any> {
    return this.httpClient.post(this.endpoint+'login', loginInfo);
  }


  registerUser(regInfo): Observable<any> {
    return this.httpClient.post(this.endpoint+'register_user', regInfo);
  }

  isUserAuthenticated(): Promise<any> {

    let userToken = localStorage.getItem('userToken');
    return fetch(this.endpointAuth+"status?token="+userToken) .then(
      (data) =>  data.json()
    ) .then (
      (data) =>  data['session'] == "alive"
    )

  }

}
