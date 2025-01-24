import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {UserRegistrationDTOReq} from '../model/UserRegistrationDTOReq';
import {UserDTOLoginReq} from '../model/UserDTOLoginReq';
import {UserLoginDTOResp} from '../model/UserLoginDTOResp';
import {KaboomDTOResp} from '../model/KaboomDTOResp';
import {BrainjDTOResp} from '../model/BrainjDTOResp';
import {UserScoreDTOReq} from '../model/UserScoreDTOReq';
import {UserScoreDTOResp} from '../model/UserScoreDTOResp';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get quizResult(): { result: boolean; score: number } {
    return this._quizResult;
  }

  set quizResult(value: { result: boolean; score: number }) {
    this._quizResult = value;
  }

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
  private _quizResult: { result: boolean, score: number }

  constructor(private http: HttpClient) {
    this._userLoginReqDto = {
      difficulty: "", id: 0, score: 0, token: "", username: ""
    }
    this._life = 0;
    this._noodleOk = 1;
    this._kabooms = [];
    this._brainjs = [];
    this._numberOfQuiz = 10;
    this._quizResult = {result: false, score: 0}
  }

  register(dto: UserRegistrationDTOReq): Observable<UserLoginDTOResp> {
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
    console.log(this._brainjs.length)
    let index = this.generateRandomNumber(this._brainjs.length);
    let ret = this._brainjs[index]
    this._brainjs.splice(index, 1)
    console.log(this._brainjs.length)
    return ret
  }

  getSingleKaboom(): KaboomDTOResp {
    return this._kabooms[this.generateRandomNumber(this._kabooms.length)]
  }

  calculateScore(dto: UserScoreDTOReq): Observable<UserScoreDTOResp> {
    return this.http.post<UserScoreDTOResp>("/api/users/score", dto)
  }

  private generateRandomNumber(size: number): number {
    const randomNumber = Math.random();
    return Math.floor(randomNumber * size - 1)
  }

}
