import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const baseUrl = '/api/v1/users';
@Injectable({
  providedIn: 'root',
})
export class WizkidsService {
  constructor(private http: HttpClient) {}
  getWizkids(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}`);
    // return this.http.get('')
  }
}
