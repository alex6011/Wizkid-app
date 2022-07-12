import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Wizkid } from '../types/wizkid.type';

const baseUrl = '/api/v1/users';
@Injectable({
  providedIn: 'root',
})
export class WizkidsService {
  private storage: Storage = sessionStorage;
  constructor(private http: HttpClient) {
 
  }
  getWizkids(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}`);

  }
  registerWizkid(body:Wizkid):Observable<any>{
    return this.http.post(`${baseUrl}/signup`,body);
  }
  login(){
    
  }
}
