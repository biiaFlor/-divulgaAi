import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from '../seguranca/token.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  constructor(private http: HttpClient, private tokenService: TokenService) { }
  
  create(product: any) {
    const user_id = this.tokenService.getUser().id;

    return this.http.post(environment.url + '/product', {...product, user_id})
  }
  
  all() {
    return this.http.get(environment.url + '/product/all');
  }

  allUser() {

    const userId = this.tokenService.getUser().id;

    return this.http.get(environment.url + '/product/all/' + userId);
  }
  
  getById(id: any) {
    return this.http.get(environment.url + '/product/' + id);
  }
}
