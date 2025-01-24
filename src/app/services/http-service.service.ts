import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserRegistrationDTOReq} from '../model/UserRegistrationDTOReq';
import {UserLeaderboardDTOReq} from '../model/UserLeaderboardDTOReq';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  insertUser(dto:UserRegistrationDTOReq): Observable<UserLeaderboardDTOReq>
  {
    return this.http.post<UserLeaderboardDTOReq>("/api/users/register",dto);
  }
}
