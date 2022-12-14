import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    return localStorage.getItem('TOKEN_LOCALIZA_AI');
  }

  setToken(token: string) {
    localStorage.setItem('TOKEN_LOCALIZA_AI', token);
  }

  setUser(user: any) {
    localStorage.setItem('USER_LOCALIZA_AI', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('USER_LOCALIZA_AI') as string);
  }

  removeToken() {
    localStorage.removeItem('TOKEN_LOCALIZA_AI');
  }

  removeUser() {
    localStorage.removeItem('USER_LOCALIZA_AI');
  }

  hasToken() {
    return !!localStorage.getItem('TOKEN_LOCALIZA_AI');
  }

}
