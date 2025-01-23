import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserDTOReq} from '../model/UserDTOReq';
import {UserDTOCompleto} from '../model/UserDTOCompleto';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  insertUser(dto:UserDTOReq): Observable<UserDTOCompleto>
  {
    return this.http.post<UserDTOCompleto>("/api/users/register",dto);
  }
}
