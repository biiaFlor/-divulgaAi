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

  update(product: any) {
    console.log(product);
    
    return this.http.put(environment.url + '/product/' + product.id, product)
  }

  delete(id: number) {
    return this.http.delete(environment.url + '/product/' + id);
  }
  
  all() {
    return this.http.get(environment.url + '/product/all');
  }

  allUser(id: number) {
    return this.http.get(environment.url + '/product/all/' + id);
  }
  
  getById(id: any) {
    return this.http.get(environment.url + '/product/' + id);
  }
}
