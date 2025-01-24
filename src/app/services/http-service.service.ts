import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserRegistrationDTOReq} from '../model/UserRegistrationDTOReq';
import {UserLeaderboardDTOReq} from '../model/UserLeaderboardDTOReq';
import {UserDTOLoginReq} from '../model/UserDTOLoginReq';
import {UserLoginDTOResp} from '../model/UserLoginDTOResp';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  insertUser(dto:UserRegistrationDTOReq): Observable<UserLoginDTOResp>
  {
    return this.http.post<UserLoginDTOResp>("/api/users/register",dto);
  }

  login(dto:UserDTOLoginReq): Observable<UserLoginDTOResp>
  {
    return this.http.post<UserLoginDTOResp>("/api/users/login", dto)
  }

  // getUserInfoLogin(dto:UserLoginDTOResp): Observable<UserLoginDTOResp> {
  //   return this.http.post<UserLoginDTOResp>("/api/users/login",dto);
  // }




}
