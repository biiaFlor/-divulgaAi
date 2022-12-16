import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { TokenService } from '../seguranca/token.service';
import { ProductService } from '../services/product.service';

@Injectable({
  providedIn: 'root'
})
export class MyProductsResolver implements Resolve<any> {

  constructor(private productService: ProductService, private tokenService: TokenService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.productService.allUser(this.tokenService.getUser().id);
  }
}
