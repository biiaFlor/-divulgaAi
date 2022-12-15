import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { TokenService } from './token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService, private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(request.url.includes('viacep') || request.url.includes('/all-companies')) {
      return next.handle(request);
    } 

    if(this.authService.isLogged() && !this.router.url.includes('/all_products') && !request.url.includes('/all_companies')) {

      const authToken = this.tokenService.getToken();
        request = request.clone({
              setHeaders: {
                  'x-access-token': authToken as string
              }
          });

      return next.handle(request);
    }

    return next.handle(request);
  }
}
