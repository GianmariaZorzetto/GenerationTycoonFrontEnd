import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {UserRegistrationDTOReq} from '../model/UserRegistrationDTOReq';
import {UserDTOLoginReq} from '../model/UserDTOLoginReq';
import {UserLoginDTOResp} from '../model/UserLoginDTOResp';
import {KaboomDTOResp} from '../model/KaboomDTOResp';
import {BrainjDTOResp} from '../model/BrainjDTOResp';
import * as console from 'node:console';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get numberOfQuiz() {
    return this._numberOfQuiz;
  }

  quizCompleted() {
    if (this._numberOfQuiz == 0) return;
    this._numberOfQuiz -= 1;
  }

  get life() {
    return this._life
  }

  set life(value: number) {
    this._life = value;
  }

  loseLife(): boolean {
    this._life -= 1
    return this._life == 0
  }

  eatNoodle() {
    if (this._noodleOk < 1) return;
    this._noodleOk -= 1;
  }

  availableNoodle(): boolean {
    return this._noodleOk == 1;
  }

  get userLoginReqDto(): UserLoginDTOResp {
    return this._userLoginReqDto;
  }

  set userLoginReqDto(value: UserLoginDTOResp) {
    this._userLoginReqDto = value;
    console.log(this._userLoginReqDto.token)
  }

  private _userLoginReqDto: UserLoginDTOResp;
  private _life: number;
  private _numberOfQuiz;
  private _noodleOk;
  private _kabooms: KaboomDTOResp[];
  private _brainjs: BrainjDTOResp[];

  constructor(private http: HttpClient) {
    this._userLoginReqDto = {
      difficulty: "", id: 0, score: 0, token: "", username: ""
    }
    this._life = 0;
    this._noodleOk = 1;
    this._kabooms = [];
    this._brainjs = [];
    this._numberOfQuiz = 10;
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

  getKabooms() {
    this.http.get<KaboomDTOResp[]>("/api/kabooms").subscribe(res => {
      this._kabooms = res
      console.log(this._kabooms)
    })
  }

  getBrainjs() {
    this.http.get<BrainjDTOResp[]>("/api/brainjs").subscribe(res => {
      this._brainjs = res
      console.log(this._brainjs)
    })
  }

  getSingleBrainj(): BrainjDTOResp {
    //   // TODO prendi casualmente un brainj, toglilo dall'array e restituiscilo
    return this._brainjs[0]
  }

  getSingleKaboom(): KaboomDTOResp {
    // TODO prendi casualmente un kaboom, toglilo dall'array e restituiscilo.
    return this._kabooms[0]
  }

}
