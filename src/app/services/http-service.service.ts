import {Injectable} from '@angular/core';
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
  get userLoginReqDto(): UserLoginDTOResp {
    return this._userLoginReqDto;
  }

  set userLoginReqDto(value: UserLoginDTOResp) {
    this._userLoginReqDto = value;
    console.log(this._userLoginReqDto.token)
  }

  private _userLoginReqDto: UserLoginDTOResp;

  constructor(private http: HttpClient) {
    this._userLoginReqDto = {
      difficulty: "", id: 0, score: 0, token: "", username: ""
    }
  }

  insertUser(dto: UserRegistrationDTOReq): Observable<UserLoginDTOResp> {
    return this.http.post<UserLoginDTOResp>("/api/users/register", dto);
  }

  login(dto: UserDTOLoginReq): Observable<UserLoginDTOResp> {
    return this.http.post<UserLoginDTOResp>("/api/users/login", dto)
  }
}
