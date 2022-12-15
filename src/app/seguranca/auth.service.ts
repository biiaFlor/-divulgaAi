import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private tokenService: TokenService, private http: HttpClient) { }

  register(userObj: any) {

    return this.http
      .post(environment.url + '/user/', userObj)
      .pipe(tap((ret: any) => {
        this.tokenService.setToken(ret.jwt);
        this.tokenService.setUser(ret.user);
      }));
  }

  getUser(id: number) {
    return this.http.get(environment.url + '/user/' + id);
  }

  update(userObj: any) {
    return this.http
      .put(environment.url + '/user/' + this.tokenService.getUser().id, userObj)
      .pipe(tap((ret: any) => {
        this.tokenService.setUser({...this.tokenService.getUser(),  ...userObj});
      }));
  }

  getAllCompanies() {
    return this.http.get(environment.url + '/user/all-companies');
  }

  login(userLogin: any) {
    return this.http.post(environment.url + '/user/login', userLogin)
    .pipe(tap((ret: any) => {
      this.tokenService.setToken(ret.jwt);
      this.tokenService.setUser(ret.user);
    }));
  }

  logout() {
    this.tokenService.removeToken();
    this.tokenService.removeUser();
  }

  isLogged() {
    return this.tokenService.hasToken();
  }

}
