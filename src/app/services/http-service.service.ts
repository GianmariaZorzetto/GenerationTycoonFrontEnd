import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserRegistrationDTOReq} from '../model/UserRegistrationDTOReq';
import {UserLeaderboardDTOReq} from '../model/UserLeaderboardDTOReq';
import {UserDTOLoginReq} from '../model/UserDTOLoginReq';
import {UserLoginDTOResp} from '../model/UserLoginDTOResp';
// import * as console from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get vita() {
    return this._vita
  }

  set vita(value: number) {
    this._vita = value;
  }

  get userLoginReqDto(): UserLoginDTOResp {
    return this._userLoginReqDto;
  }

  scalaVita(): boolean {
    this._vita -= 1
    return this._vita == 0
  }

  set userLoginReqDto(value: UserLoginDTOResp) {
    this._userLoginReqDto = value;
    console.log(this._userLoginReqDto.token)
  }

  private _userLoginReqDto: UserLoginDTOResp;
  private _vita: number;

  constructor(private http: HttpClient) {
    this._userLoginReqDto = {
      difficulty: "", id: 0, score: 0, token: "", username: ""
    }
    this._vita = 0
  }

  insertUser(dto: UserRegistrationDTOReq): Observable<UserLoginDTOResp> {
    return this.http.post<UserLoginDTOResp>("/api/users/register", dto);
  }

  login(dto: UserDTOLoginReq): Observable<UserLoginDTOResp> {
    return this.http.post<UserLoginDTOResp>("/api/users/login", dto)
  }

  // getUserInfoLogin(dto:UserLoginDTOResp): Observable<UserLoginDTOResp> {
  //   return this.http.post<UserLoginDTOResp>("/api/users/login",dto);
  // }


}
