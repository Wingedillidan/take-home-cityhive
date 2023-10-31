import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = false;

  constructor(private http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post('http://localhost:3000/sessions', {email, password}, {withCredentials: true})
      .pipe(tap(() => {
        this.isLoggedIn = true
      }));
  }

  logout() {
    return this.http.delete('http://localhost:3000/logout', {withCredentials: true})
      .pipe(tap(() => {
        this.isLoggedIn = false
      }));
  }

  check() {
    return this.http.get('http://localhost:3000/sessions', {withCredentials: true})
      .pipe(tap(() => {
        this.isLoggedIn = true;
      }))
  }

  register(email: string, password: string, passwordConfirmation: string) {
    return this.http.post('http://localhost:3000/users', null, {params: {email, password, password_confirmation: passwordConfirmation}})
      .pipe(map(() => {
        return true
      }));
  }
}