import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {UserRegistrationDTOReq} from '../model/UserRegistrationDTOReq';
import {UserDTOLoginReq} from '../model/UserDTOLoginReq';
import {UserLoginDTOResp} from '../model/UserLoginDTOResp';
import {KaboomDTOResp} from '../model/KaboomDTOResp';
import {BrainjDTOResp} from '../model/BrainjDTOResp';

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

  mangiaNoodle() {
    if (this._noodleOk < 1) return;
    this._noodleOk -= 1;
  }

  haiNoodle(): boolean {
    return this._noodleOk == 1;
  }

  set userLoginReqDto(value: UserLoginDTOResp) {
    this._userLoginReqDto = value;
    console.log(this._userLoginReqDto.token)
  }

  private _userLoginReqDto: UserLoginDTOResp;
  private _vita: number;
  private _noodleOk = 1;
  private _kabooms: KaboomDTOResp[] = []
  private _brainjs: BrainjDTOResp[] = []

  constructor(private http: HttpClient) {
    this._userLoginReqDto = {
      difficulty: "", id: 0, score: 0, token: "", username: ""
    }
    this._vita = 0
  }

  insertUser(dto: UserRegistrationDTOReq): Observable<UserLoginDTOResp> {
    return this.http.post<UserLoginDTOResp>("/api/users/register", dto).pipe(tap((res) => {
      this.userLoginReqDto = res
    }));
  }

  login(dto: UserDTOLoginReq): Observable<UserLoginDTOResp> {
    return this.http.post<UserLoginDTOResp>("/api/users/login", dto).pipe(tap((res) => {
      this.userLoginReqDto = res
    }));
  }

  prendiKabooms() {
    this.http.get<KaboomDTOResp[]>("/api/kabooms").subscribe(res => {
      this._kabooms = res
      console.log(this._kabooms)
    })
  }

  prendiBrainjs() {
    this.http.get<BrainjDTOResp[]>("/api/brainjs").subscribe(res => {
      this._brainjs = res
      console.log(this._brainjs)
    })
  }

  prendiBrainj(): BrainjDTOResp {
    //   // TODO prendi casualmente un brainj, toglilo dall'array e restituiscilo
    return this._brainjs[0]
  }

  prendiKaboom(): KaboomDTOResp {
    // TODO prendi casualmente un kaboom, toglilo dall'array e restituiscilo.
    return this._kabooms[0]
  }

  getUserInfoLogin(dto: UserLoginDTOResp): Observable<UserLoginDTOResp> {
    return this.http.post<UserLoginDTOResp>("/api/users/login", dto);
  }


}
