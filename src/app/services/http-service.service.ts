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
import {UserLeaderboardDTOResp} from '../model/UserLeaderboardDTOResp';
import {UserUpdateScoreDTOReq} from '../model/UserUpdateScoreDTOReq';
import {UserResetDTOReq} from '../model/UserResetDTOReq';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  get score(): number {
    return this._score;
  }

  set score(value: number) {
    this._score = value;
  }

  set numberOfQuiz(value) {
    this._numberOfQuiz = value;
  }

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
    if (this._life == 0) return false
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
  }

  private _userLoginReqDto: UserLoginDTOResp;
  private _life: number;
  private _numberOfQuiz;
  private _noodleOk;
  private _kabooms: KaboomDTOResp[];
  private _brainjs: BrainjDTOResp[];
  private _quizResult: { result: boolean, score: number }
  private _score: number
  private difficultyToNumber = {
    EASY: 3,
    MEDIUM: 2,
    HARD: 1
  }
  private difficultyToNoodle = {
    EASY: 1,
    MEDIUM: 1,
    HARD: 0,
  }


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
    this._score = 0
  }

  getSingleBrainj(): BrainjDTOResp {
    let index = this.generateRandomNumber(this._brainjs.length);
    let ret = this._brainjs[index]
    this._brainjs.splice(index, 1)
    return ret
  }

  getSingleKaboom(): KaboomDTOResp {
    return this._kabooms[this.generateRandomNumber(this._kabooms.length)]
  }

  private generateRandomNumber(size: number): number {
    const randomNumber = Math.random();
    return Math.floor(randomNumber * (size - 1))
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

  calculateScore(dto: UserScoreDTOReq): Observable<UserScoreDTOResp> {
    return this.http.post<UserScoreDTOResp>("/api/users/score", dto)
  }

  getAllLeaderBoard(): Observable<UserLeaderboardDTOResp[]> {
    return this.http.get<UserLeaderboardDTOResp[]>("/api/users")
  }

  updateUserScore(dto: UserUpdateScoreDTOReq): Observable<UserLeaderboardDTOResp> {
    return this.http.put<UserLeaderboardDTOResp>("/api/users/newScore", dto)
  }

  resetUserScore(dto: UserResetDTOReq): Observable<UserLoginDTOResp> {
    return this.http.put<UserLoginDTOResp>("/api/users/reset", dto)
  }

  reinitializeUser(dto: UserLoginDTOResp) {
    this.score = dto.score
    // @ts-ignore
    this.life = this.difficultyToNumber[dto.difficulty]
    // @ts-ignore
    this._noodleOk = this.difficultyToNoodle[dto.difficulty]
    this.getBrainjs()
    this.getKabooms()
    this.userLoginReqDto = dto
    this.numberOfQuiz = 10
  }
}
