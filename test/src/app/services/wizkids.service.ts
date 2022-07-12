import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Wizkid } from '../types/wizkid.type';
const baseUrl = '/api/v1/users';
@Injectable({
  providedIn: 'root',
})
export class WizkidsService {
  constructor(private http: HttpClient) {}
  getWizkids(): Observable<Wizkid[]> {
    return this.http.get<Wizkid[]>(`${baseUrl}`);
    // return this.http.get('')
  }
}
