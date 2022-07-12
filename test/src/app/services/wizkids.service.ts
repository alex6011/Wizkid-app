import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Wizkid } from '../types/wizkid.type';

const baseUrl = '/api/v1/users';
@Injectable({
  providedIn: 'root',
})
export class WizkidsService {
  //private wizkidTest: Wizkid = new Wizkid();
  private wizKid: BehaviorSubject<Wizkid> ;
  private storage: Storage = sessionStorage;
  getCurrentUser():BehaviorSubject<Wizkid> {
    return this.wizKid;
  }
  constructor(private http: HttpClient, private router: Router) {
    this.wizKid = new BehaviorSubject<Wizkid>(null);
    let data = JSON.parse(this.storage.getItem('_User'));
    if (data != null) {
      this.wizKid.next(data);
    }
    this.wizKid.subscribe(() => {
      this.setLocalStorage();
    });
  }
  setLocalStorage() {
    this.storage.setItem('_User', JSON.stringify(this.wizKid.value));
  }

  async isLoggedIn(): Promise<boolean> {
   
    return this.wizKid.value != null;
}
deleteUser(id:string):Observable<any>{
  return this.http.delete<any>(`${baseUrl}/deleteMe/${id}`)
}
  getWizkids(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}`);
  }
  registerWizkid(body: Wizkid): Observable<any> {
    return this.http.post(`${baseUrl}/signup`, body);
  }
  login(password: String, email: string) {
    return this.http
      .post(`${baseUrl}/login`, {
        email: email,
        password: password,
      })
      .pipe(
        map((response: any) => {
          this.wizKid.next(response.data.user);
          return response;
        })
      );
  }
  logout(): Observable<any> {
    return this.http.get(`${baseUrl}/logout`).pipe(
      map(() => {
        this.wizKid.next(null);
        this.setLocalStorage();
        this.router.navigate(['/login']);
      })
    );
  }
}
